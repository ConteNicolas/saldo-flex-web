import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ISignUpRequest } from "../models/auth-model";
import { authService } from "../services/auth-service";
import { toast } from "sonner";



export default function useSignUp() {
    const router = useRouter();
    return useMutation({
        mutationFn: async (data: ISignUpRequest) => await authService.signUp(data),
        onSuccess: (data) => {
            toast.success(data);

            router.push("/sign-in");
        },
        onError: (err) => {
            toast.error(err.message);
        }
    })
}