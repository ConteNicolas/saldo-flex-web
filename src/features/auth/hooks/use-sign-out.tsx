import { useRouter } from "next/navigation";


export default function useSignOut() {
    const router = useRouter();

    const signOut = () => {
        sessionStorage.removeItem("sf_token");
        router.push("/")
    }
    
    return {
        signOut
    }
}