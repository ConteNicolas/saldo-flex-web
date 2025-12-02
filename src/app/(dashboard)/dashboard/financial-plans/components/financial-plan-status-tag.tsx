import { IFinancialPlan } from "@/features/financial-plans/models/financial-plan-model";
import { Badge } from "@/shared/components/ui/badge";

interface IFinancialPlanStatusTagProps {
    financialPlan: IFinancialPlan;
}

const statusColor = {
    0: "bg-green-500 text-white",
    1: "bg-orange-500 text-white"
}

export default function FinancialPlanStatusTag({ financialPlan }: IFinancialPlanStatusTagProps) {
    return (
        <div className="w-full flex flex-wrap gap-2 relative top-6">
            <Badge variant="outline" className={`${statusColor[financialPlan.status]} text-white`}>{financialPlan.statusDescription}</Badge>
        </div>
    )
}