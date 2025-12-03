import { useSetAtom } from "jotai";
import { IUpdateFinancialPlanStatusRequest } from "../models/financial-plan-model";
import { financialPlanService } from "../services/financial-plan-service";
import { financialPlanAtom } from "@/stores/financial-plan-store";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";



export default function useUpdateFinancialStatusPlan() {
    const setFinancialPlan = useSetAtom(financialPlanAtom);

    return useMutation({
        mutationFn: (data: IUpdateFinancialPlanStatusRequest) => financialPlanService.updateStatus(data),
        onSuccess: (data) => {
            toast.success("Financial plan updated successfully");
            setFinancialPlan(
                prev => 
                    [{ ...prev.find(p => p.id === data.id)!, statusDescription: data.statusDescription, updatedAt: data.updatedAt }, ...prev.filter(p => p.id !== data.id)]
            );
        },
        onError: (err) => {
            toast.error(err.message);
        }
    })

}