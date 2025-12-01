import { Button } from "@/shared/components/ui/button";
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from "@/shared/components/ui/empty";
import { ArrowUpRightIcon, ClipboardPenIcon } from "lucide-react";
import CreateFinancialPlanSheet from "./create-financial-plan-sheet";


export default function EmptyFinancialPlan() {
    return (
        <Empty className="mt-20">
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <ClipboardPenIcon className="w-13! h-13!" />
                </EmptyMedia>
                <EmptyTitle className="text-2xl mt-2">No financial plan Yet</EmptyTitle>
                <EmptyDescription className="text-lg">
                    You haven&apos;t created any plan yet. Get started by creating
                    your financial plan.
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <div className="mt-2">
                    <CreateFinancialPlanSheet />
                </div>
            </EmptyContent>
        </Empty>
    )
}