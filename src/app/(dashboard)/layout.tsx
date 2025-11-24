"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const token = localStorage.getItem("sf_token");

    useEffect(() => {
        if (!token) {
            router.replace("/sign-in");
        }
    }, [])

    if (!token) {
        return null;
    }
    
    return (
        <div className="w-full h-full bg-white">
            {children}
        </div>
    )
}