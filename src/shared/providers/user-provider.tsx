import useUser from "@/features/users/hooks/use-user";
import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { userAtom } from "@/stores/user-store";

export default function UserProvider({ children }: { children: React.ReactNode }) {
    const { data, isSuccess } = useUser().getMe;
    const setUserStore = useSetAtom(userAtom);

    useEffect(() => {
        if (data && isSuccess) {
            setUserStore(data);
        }
    }, [data, isSuccess]);

    return (
        <>
            {children}
        </>
    )
}