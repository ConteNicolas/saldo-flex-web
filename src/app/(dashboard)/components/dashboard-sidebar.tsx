import useAuth from "@/features/auth/hooks/use-auth";
import { Avatar } from "@/shared/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/shared/components/ui/dropdown-menu";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/shared/components/ui/sidebar";
import { Switch } from "@/shared/components/ui/switch";
import { userAtom } from "@/stores/user-store";
import { useAtomValue } from "jotai";
import { ClipboardPenIcon, HelpCircleIcon, LogOutIcon, SettingsIcon, TagsIcon, WalletIcon } from "lucide-react";

const firstGroupItems = [
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
    }
]

const secondGroupItems = [
    {
        "title": "Settings",
        "url": "/settings",
        "icon": SettingsIcon
    },
    {
        "title": "Help",
        "url": "/helps",
        "icon": HelpCircleIcon
    }
]

export default function DashboardSidebar() {
    const user = useAtomValue(userAtom);
    const { signOut } = useAuth();

    return (
        <Sidebar className="h-full">
            <SidebarHeader className="w-full h-[10%] flex items-center justify-center">
                <h1 className="text-4xl font-light mt-4 text-purple-500">Saldo flex</h1>
            </SidebarHeader>
            <SidebarContent className="w-full h-[70%]">
                <SidebarGroup className="p-6">
                    <SidebarGroupLabel className="font-bold text-sm">Principal</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="p-2">
                            {firstGroupItems.map(x =>
                                <SidebarMenuItem key={x.title} className="rounded">
                                    <SidebarMenuButton asChild className="h-12 hover:bg-purple-500 hover:text-white transition">
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
                                    <SidebarMenuButton asChild className="h-12 hover:bg-purple-500 hover:text-white transition w-full">
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
                                <SidebarMenuButton className="h-full hover:bg-slate-200 transition cursor-pointer">
                                    <div className="w-full h-full flex flex-row">
                                        <div className="w-[20%] h-full flex items-center justify-center">
                                            <Avatar className="text-white flex items-center justify-center text-sm mb-1 size-12 bg-purple-800">
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