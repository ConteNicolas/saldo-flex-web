"use client"

import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import { userAtom } from "@/stores/user-store";
import { useAtomValue } from "jotai";
import { ClipboardPenIcon, PlusIcon, TagsIcon, WalletIcon } from "lucide-react";
import Link from "next/link";

const introCards = [
    {
        "title": "Create a plan",
        "icon": ClipboardPenIcon,
        "icon-color": "text-purple-500",
        "url": "/dashboard/financial-plans"
    },
    {
        "title": "Create a tag",
        "icon": TagsIcon,
        "icon-color": "text-orange-500",
        "url": "/tags"
    },
    {
        "title": "Set up currency",
        "icon": WalletIcon,
        "icon-color": "text-green-500",
        "url": "/currencies"
    }
]

export default function DashboardPage() {
    const user = useAtomValue(userAtom);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-6xl">Hi, <span className="text-purple-500">{user.firstname}</span></h1>
            <span className="text-lg mt-6">Get started by creating a financial plan or setting up your tags and currencies</span>
            <div className="w-[80%] mt-12 flex flex-row justify-evenly">
                {introCards.map((intro) =>
                    <Card key={intro.title} className="w-[25%] h-18 cursor-pointer hover:bg-slate-200 transition shadow-lg">
                        <CardContent className="flex flex-row justify-around h-full items-center">
                            <Link href={intro.url} className="w-full h-full flex flex-row justify-around items-center">
                                <intro.icon className={intro["icon-color"]} />
                                <span>{intro.title}</span>
                                <PlusIcon />
                            </Link>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    )
}