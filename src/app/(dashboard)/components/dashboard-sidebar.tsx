import useSignOut from "@/features/auth/hooks/use-sign-out";
import { Avatar } from "@/shared/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/shared/components/ui/dropdown-menu";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/shared/components/ui/sidebar";
import { userAtom } from "@/stores/user-store";
import { useAtomValue } from "jotai";
import { ClipboardPenIcon, HelpCircleIcon, HomeIcon, LogOutIcon, SettingsIcon, TagsIcon, WalletIcon } from "lucide-react";

const firstGroupItems = [
    {
        "title": "Home",
        "url": "/dashboard",
        "icon": HomeIcon
    },
    {
        "title": "Financial plans",
        "url": "/dashboard/financial-plans",
        "icon": ClipboardPenIcon
    },
    {
        "title": "Tags",
        "url": "/dashboard/tags",
        "icon": TagsIcon
    },
    {
        "title": "Currencies",
        "url": "/dashboard/currencies",
        "icon": WalletIcon
    }
]

const secondGroupItems = [
    {
        "title": "Settings",
        "url": "/dashboard/settings",
        "icon": SettingsIcon
    },
    {
        "title": "Help",
        "url": "/dashboard/helps",
        "icon": HelpCircleIcon
    }
]

export default function DashboardSidebar() {
    const user = useAtomValue(userAtom);
    const { signOut } = useSignOut();

    return (
        <Sidebar className="h-full">
            <SidebarHeader className="w-full h-[10%] flex items-center justify-center">
                <h1 className="text-4xl font-light mt-4 text-green-500">Saldo flex</h1>
            </SidebarHeader>
            <SidebarContent className="w-full h-[70%]">
                <SidebarGroup className="p-6">
                    <SidebarGroupLabel className="font-bold text-sm">Principal</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="p-2">
                            {firstGroupItems.map(x =>
                                <SidebarMenuItem key={x.title} className="rounded">
                                    <SidebarMenuButton asChild className="h-12 hover:bg-green-500 hover:text-white transition">
                                        <a href={x.url}>
                                            <x.icon className="h-5! w-5!" />
                                            <span className="ml-4 mt-1 text-md">{x.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup className="p-6">
                    <SidebarGroupLabel className="font-bold text-sm">Help and settings</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="p-2">
                            {secondGroupItems.map(x =>
                                <SidebarMenuItem key={x.title} className="rounded">
                                    <SidebarMenuButton asChild className="h-12 hover:bg-green-500 hover:text-white transition w-full">
                                        <a href={x.url}>
                                            <x.icon className="h-5! w-5!" />
                                            <span className="ml-4 mt-1 text-md">{x.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>              
            </SidebarContent>
            <SidebarFooter className="w-full h-[10%]">
                <SidebarMenu className="h-18">
                    <SidebarMenuItem className="h-full">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton className="h-full hover:bg-green-600 hover:text-white transition cursor-pointer">
                                    <div className="w-full h-full flex flex-row">
                                        <div className="w-[20%] h-full flex items-center justify-center">
                                            <Avatar className="text-white flex items-center justify-center text-sm mb-1 size-12 bg-green-500">
                                                <span className="mt-1">{user.alias}</span>
                                            </Avatar>
                                        </div>
                                        <div className="w-[80%] h-full flex flex-col items-start justify-center text-sm p-3">
                                            <span className="font-bold">{`${user.firstname} ${user.lastname}`}</span>
                                            <span className="text-xs">{user.email}</span>
                                        </div>
                                    </div>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="right"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuItem onClick={signOut} className="cursor-pointer transition">
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