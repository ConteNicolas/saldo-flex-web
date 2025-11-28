import useAuth from "@/features/auth/hooks/use-auth";
import { Avatar } from "@/shared/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/shared/components/ui/dropdown-menu";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/shared/components/ui/sidebar";
import { userAtom } from "@/stores/user-store";
import { useAtomValue } from "jotai";
import { ClipboardPenIcon, LogOutIcon, SettingsIcon, TagsIcon, WalletIcon } from "lucide-react";

const items = [
    {
        "title": "Financial plans",
        "url": "/financial-plans",
        "icon": ClipboardPenIcon
    },
    {
        "title": "Tags",
        "url": "/tags",
        "icon": TagsIcon
    },
    {
        "title": "Currencies",
        "url": "/currencies",
        "icon": WalletIcon
    },
    {
        "title": "Settings",
        "url": "/settings",
        "icon": SettingsIcon
    }
]

export default function DashboardSidebar() {
    const userStore = useAtomValue(userAtom);
    const { signOut } = useAuth();

    return (
        <Sidebar className="h-full">
            <SidebarHeader className="w-full h-[12%] flex items-center justify-center border-slate-300 border-b-1">
                <h1 className="text-4xl font-light mt-4 text-purple-500">Saldo flex</h1>
            </SidebarHeader>
            <SidebarContent className="w-full h-[70%]">
                <SidebarMenu className="mt-8 flex flex-col items-center justify-center">
                    {items.map(x =>
                        <SidebarMenuItem key={x.title} className="mt-4 rounded">
                            <SidebarMenuButton asChild className="h-14 w-58 p-6  hover:bg-purple-500 hover:text-white">
                                <a href={x.url}>
                                    <x.icon className="h-6! w-6!" />
                                    <span className="ml-4 mt-1 text-md font-bold">{x.title}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    )}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="w-full h-[10%]">
                <SidebarMenu className="h-18">
                    <SidebarMenuItem className="h-full">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton className="h-full hover:bg-purple-500 hover:text-white cursor-pointer">
                                    <div className="w-full h-full flex flex-row">
                                        <div className="w-[20%] h-full flex items-center justify-center">
                                            <Avatar className="text-white flex items-center justify-center text-sm mb-1 size-12 bg-purple-800">
                                                <span className="mt-1">{userStore.alias}</span>
                                            </Avatar>
                                        </div>
                                        <div className="w-[80%] h-full flex flex-col items-start justify-center text-sm p-3">
                                            <span className="font-bold">{`${userStore.firstname} ${userStore.lastname}`}</span>
                                            <span className="text-xs">{userStore.email}</span>
                                        </div>
                                    </div>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="right"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuItem onClick={signOut} className="cursor-pointer">
                                    <span>Sign out</span><LogOutIcon />
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )

}