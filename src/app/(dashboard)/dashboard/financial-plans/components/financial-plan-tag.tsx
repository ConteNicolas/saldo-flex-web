import { IFinancialPlanTag } from "@/features/financial-plans/models/financial-plan-model";
import { Badge } from "@/shared/components/ui/badge";

interface IFinancialPlanTagProps {
    tags: IFinancialPlanTag[];
}

export default function FinancialPlanTag({ tags }: IFinancialPlanTagProps) {
    return (
        <div className="w-full flex flex-wrap gap-2 relative top-6">
            {tags.map((tag) => (
                <Badge variant="outline" className="bg-orange-500 text-white" key={tag.id}>{tag.name}</Badge>
            ))}
        </div>
    )
}