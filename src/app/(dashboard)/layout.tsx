"use client"

import { SidebarProvider, SidebarTrigger } from "@/shared/components/ui/sidebar"
import { AuthGuard } from "@/shared/guards/auth-guard"
import UserProvider from "@/shared/providers/user-provider"
import DashboardSidebar from "./components/dashboard-sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthGuard authFailRedirectUrl="/sign-in">
            <UserProvider>
                <SidebarProvider>
                    <DashboardSidebar />
                    <div className="w-full h-full bg-white">
                        <SidebarTrigger />
                        {children}
                    </div>
                </SidebarProvider>
            </UserProvider>
        </AuthGuard>
    )
}