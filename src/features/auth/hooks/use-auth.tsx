import { useMutation } from "@tanstack/react-query"
import { ISignInRequest, ISignUpRequest } from "../models/auth-model"
import { toast } from "sonner"
import { authService } from "../services/auth-service"
import { useRouter } from "next/navigation"


export default function useAuth() {
    const router = useRouter();

    const signIn = useMutation({
        mutationFn: async (data: ISignInRequest) => await authService.signIn(data),
        onSuccess: (data) => {
            sessionStorage.setItem("sf_token", data.token);

            toast.success(`Welcome!`);

            router.push("/dashboard");
        },
        onError: (err) => {
            toast.error(err.message);
        }
    })

    const signUp = useMutation({
        mutationFn: async (data: ISignUpRequest) => await authService.signUp(data),
        onSuccess: (data) => {
            toast.success(data);

            router.push("/sign-in");
        },
        onError: (err) => {
            toast.error(err.message);
        }
    })

    const signOut = () => {
        sessionStorage.removeItem("sf_token");
        router.push("/")
    }

    return {
        signIn,
        signUp,
        signOut
    }
}