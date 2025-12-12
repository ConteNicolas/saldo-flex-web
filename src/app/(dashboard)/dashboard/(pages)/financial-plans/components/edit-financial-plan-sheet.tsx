import { Button } from "@/shared/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/shared/components/ui/sheet";
import { XIcon } from "lucide-react";
import { EditFinancialPlanForm } from "./edit-financial-plan-form";
import { IFinancialPlan } from "@/features/financial-plans/models/financial-plan-model";

interface IEditFinancialPlanSheetProps {
    financialPlan: IFinancialPlan,
    open: boolean,
    setOpen: (o: boolean) => void 
}

export default function EditFinancialPlanSheet({ financialPlan, open, setOpen }: IEditFinancialPlanSheetProps) {
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent>
                <SheetHeader className="mt-10">
                    <SheetTitle>Edit financial plan</SheetTitle>
                    <SheetDescription>
                        Fill in the form below to update an existing financial plan.
                    </SheetDescription>
                </SheetHeader>
                <EditFinancialPlanForm financialPlan={financialPlan} closeSheet={() => setOpen(false)} />
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