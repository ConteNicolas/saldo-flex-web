import useDeleteFinancialPlan from "@/features/financial-plans/hooks/use-delete-financial-plan";
import { IFinancialPlan } from "@/features/financial-plans/models/financial-plan-model";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/shared/components/ui/dropdown-menu";
import { EllipsisIcon, TrashIcon, PencilIcon, PackageOpenIcon, ArchiveXIcon, ArchiveRestoreIcon } from "lucide-react";
import EditFinancialPlanSheet from "./edit-financial-plan-sheet";
import { useState } from "react";
import ConfirmDeleteAlert from "@/shared/components/confirm-delete-alert";
import useUpdateFinancialStatusPlan from "@/features/financial-plans/hooks/use-update-financial-plan-status";


interface FinancialPlanCardMenuProps {
    financialPlan: IFinancialPlan;
}


export default function FinancialPlanCardMenu({ financialPlan }: FinancialPlanCardMenuProps) {
    const { mutateAsync } = useDeleteFinancialPlan();
    const { mutateAsync: updateMutateAsync } = useUpdateFinancialStatusPlan();

    const [editSheetOpen, setEditSheetOpen] = useState(false);
    const [confirmAlertOpen, setConfirmAlertOpen] = useState(false);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger className="absolute top-2 right-4 cursor-pointer">
                    <EllipsisIcon className="hover:text-green-600" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem className="w-full flex flex-row items-center justify-between p-3 cursor-pointer" onClick={() => setConfirmAlertOpen(true)}>
                        Delete <TrashIcon />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="w-full flex flex-row items-center justify-between p-3 cursor-pointer" onClick={() => setEditSheetOpen(true)}>
                        Edit <PencilIcon />
                    </DropdownMenuItem>
                    {financialPlan.statusDescription === 'Active' && (
                        <DropdownMenuItem className="w-full flex flex-row items-center justify-between p-3 cursor-pointer" onClick={async () => updateMutateAsync({ id: financialPlan.id })}>
                            Archived <ArchiveXIcon />
                        </DropdownMenuItem>
                    )}
                    {financialPlan.statusDescription === 'Archived' && (
                        <DropdownMenuItem className="w-full flex flex-row items-center justify-between p-3 cursor-pointer" onClick={async () => updateMutateAsync({ id: financialPlan.id })}>
                            Active <ArchiveRestoreIcon />
                        </DropdownMenuItem>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
            <EditFinancialPlanSheet open={editSheetOpen} setOpen={setEditSheetOpen} financialPlan={financialPlan} />
            <ConfirmDeleteAlert 
                open={confirmAlertOpen} 
                setOpen={setConfirmAlertOpen}  
                title={`Are you sure you want to delete "${financialPlan.name}"?`}
                description="This action cannot be undone. You can archive it instead."
                onConfirm={() => mutateAsync(financialPlan.id)}
            />
        </>

    )
}