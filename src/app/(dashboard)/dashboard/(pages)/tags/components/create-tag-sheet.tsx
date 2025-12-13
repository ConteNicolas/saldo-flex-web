"use client"

import { Button } from "@/shared/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/shared/components/ui/sheet";
import { PlusIcon, XIcon } from "lucide-react";
import { useState } from "react";
import CreateTagForm from "./create-tag-form";

export default function CreateTagSheet() {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={() => setOpen(o => !o)}>
            <SheetTrigger asChild>
                <Button className="rounded-full h-10 w-46 bg-green-500 hover:bg-green-600 transition cursor-pointer text-white">
                    Create new tag <PlusIcon />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader className="mt-10">
                    <SheetTitle>Create new tag</SheetTitle>
                    <SheetDescription>
                        Fill in the form below to create a tag.
                    </SheetDescription>
                </SheetHeader>
                <CreateTagForm closeSheet={() => setOpen(false)} />
                <SheetFooter>
                    <SheetClose asChild>
                        <Button variant="outline" className="cursor-pointer">
                            Close <XIcon />
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}