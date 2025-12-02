import useDeleteFinancialPlan from "@/features/financial-plans/hooks/use-delete-financial-plan";
import { FinancialPlanStatusEnum, IFinancialPlan } from "@/features/financial-plans/models/financial-plan-model";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/shared/components/ui/dropdown-menu";
import { EllipsisIcon, TrashIcon, PencilIcon, PackageOpenIcon, ArchiveXIcon, ArchiveRestoreIcon } from "lucide-react";
import EditFinancialPlanSheet from "./edit-financial-plan-sheet";
import { useState } from "react";
import useUpdateFinancialPlan from "@/features/financial-plans/hooks/use-update-financial-plan";


interface FinancialPlanCardMenuProps {
    financialPlan: IFinancialPlan;
}


export default function FinancialPlanCardMenu({ financialPlan }: FinancialPlanCardMenuProps) {
    const { mutateAsync } = useDeleteFinancialPlan();
    const { mutateAsync: updateMutateAsync } = useUpdateFinancialPlan();
    const [open, setOpen] = useState(false);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger className="absolute top-2 right-4 cursor-pointer">
                    <EllipsisIcon className="hover:text-green-600" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={async () => mutateAsync(financialPlan.id)}>
                        Delete <TrashIcon />
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setOpen(true)}>
                        Edit <PencilIcon />
                    </DropdownMenuItem>
                    {financialPlan.status === FinancialPlanStatusEnum.Active && (
                        <DropdownMenuItem onClick={async () => updateMutateAsync({ id: financialPlan.id, status: FinancialPlanStatusEnum.Archived })}>
                            Archived <ArchiveXIcon />
                        </DropdownMenuItem>
                    )}
                    {financialPlan.status === FinancialPlanStatusEnum.Archived && (
                        <DropdownMenuItem onClick={async () => updateMutateAsync({ id: financialPlan.id, status: FinancialPlanStatusEnum.Active })}>
                            Active <ArchiveRestoreIcon />
                        </DropdownMenuItem>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
            <EditFinancialPlanSheet open={open} setOpen={setOpen} financialPlan={financialPlan} />
        </>

    )
}