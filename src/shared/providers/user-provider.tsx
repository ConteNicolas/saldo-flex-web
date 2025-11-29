import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { userAtom } from "@/stores/user-store";
import useGetMe from "@/features/users/hooks/use-get-me";

export default function UserProvider({ children }: { children: React.ReactNode }) {
    const { data, isSuccess } = useGetMe();
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