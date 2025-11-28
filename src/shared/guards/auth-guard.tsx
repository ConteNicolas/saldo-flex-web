"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export interface IAuthGuardProps {
    children: React.ReactNode;
    authFailRedirectUrl: string;
}

export const AuthGuard = ({ children, authFailRedirectUrl }: IAuthGuardProps) => {
    const router = useRouter();
    const [hasToken, setHasToken] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem("sf_token");
        if (!token) {
            router.replace(authFailRedirectUrl);
            setHasToken(false);
        } else {
            setHasToken(true);
        }
    }, [hasToken, router])

    if (!hasToken) {
        return null;
    }

    return (
        <>{children}</>
    )

}