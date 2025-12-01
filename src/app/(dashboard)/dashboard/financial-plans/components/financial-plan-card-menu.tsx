import useDeleteFinancialPlan from "@/features/financial-plans/hooks/use-delete-financial-plan";
import { IFinancialPlan } from "@/features/financial-plans/models/financial-plan-model";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/shared/components/ui/dropdown-menu";
import { EllipsisIcon, TrashIcon, PencilIcon } from "lucide-react";


interface FinancialPlanCardMenuProps {
    financialPlan: IFinancialPlan;
}


export default function FinancialPlanCardMenu({ financialPlan }: FinancialPlanCardMenuProps) {
    const { mutateAsync } = useDeleteFinancialPlan();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="absolute top-2 right-4 cursor-pointer">
                <EllipsisIcon className="hover:text-green-600" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={async () => mutateAsync(financialPlan.id)}>
                    Delete <TrashIcon />
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Edit <PencilIcon />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}