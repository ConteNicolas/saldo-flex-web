import { useMutation } from "@tanstack/react-query";
import { ISignInRequest } from "../models/auth-model";
import { authService } from "../services/auth-service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


export default function useSignIn() {
    const router = useRouter();

    return useMutation({
        mutationFn: async (data: ISignInRequest) => await authService.signIn(data),
        onSuccess: (data) => {
            sessionStorage.setItem("sf_token", data.token);
            router.push("/dashboard");
        },
        onError: (err) => {
            toast.error(err.message);
        }
    })
}