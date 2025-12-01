import BreadcrumbWrapper from "@/shared/components/breadcrumb-wrapper";
import { Button } from "@/shared/components/ui/button";
import { ClipboardPenIcon, PlusIcon } from "lucide-react";
import CreateFinancialPlanSheet from "./create-financial-plan-sheet";

const breadcrumb = [
    {
        label: "Dashboard",
        href: "/dashboard"
    },
    {
        label: "Financial plans",
        href: "/dashboard/financial-plans"
    }
]

export default function FinancialPlanHeader() {
    return (
        <div className="w-full h-[17%] flex flex-col py-6 items-start justify-end">
            <BreadcrumbWrapper items={breadcrumb} />
            <div className="w-full flex flex-row items-center justify-between mt-10">
                <h1 className="text-2xl font-bold flex flex-row">
                    Financial plans
                    <ClipboardPenIcon className="ml-3 h-8 w-8" />
                </h1>
                <CreateFinancialPlanSheet />        
            </div>
        </div>
    )
}