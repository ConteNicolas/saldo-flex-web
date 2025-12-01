"use client"

import { Button } from "@/shared/components/ui/button";
import { SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose, Sheet } from "@/shared/components/ui/sheet";
import { PlusIcon, XIcon } from "lucide-react";
import CreateFinancialPlanForm from "./create-financial-plan-form";
import { useState } from "react";


export default function CreateFinancialPlanSheet() {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={() => setOpen(o => !o)}>
            <SheetTrigger asChild>
                <Button className="rounded-full h-10 w-46 bg-green-500 hover:bg-green-600 transition cursor-pointer text-white">
                    Create new plan <PlusIcon />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader className="mt-10">
                    <SheetTitle>Create new financial plan</SheetTitle>
                    <SheetDescription>
                        Fill in the form below to start a new financial plan.
                    </SheetDescription>
                </SheetHeader>
                <CreateFinancialPlanForm closeSheet={() => setOpen(false)} />
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