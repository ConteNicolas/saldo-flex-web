"use client"

import { SidebarProvider, SidebarTrigger } from "@/shared/components/ui/sidebar"
import { AuthGuard } from "@/shared/guards/auth-guard"
import UserProvider from "@/shared/providers/user-provider"
import DashboardSidebar from "./components/dashboard-sidebar"
import ThemeProvider from "@/shared/providers/theme-provider"
import ThemeSwitcher from "@/shared/components/theme-switcher"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthGuard authFailRedirectUrl="/sign-in">
            <UserProvider>
                <ThemeProvider>
                    <SidebarProvider>
                        <DashboardSidebar />
                        <div className="w-screen h-screen overflow-hidden transition">
                            <SidebarTrigger className="absolute" />
                            {children}
                            <ThemeSwitcher />
                        </div>
                    </SidebarProvider>
                </ThemeProvider>
            </UserProvider>
        </AuthGuard>
    )
}