import { useMutation } from "@tanstack/react-query";
import { financialPlanService } from "../services/financial-plan-service";
import { IUpdateFinancialPlanRequest } from "../models/financial-plan-model";
import { useSetAtom } from "jotai";
import { financialPlanAtom } from "@/stores/financial-plan-store";
import { toast } from "sonner";


export default function useUpdateFinancialPlan() {
    const setFinancialPlan = useSetAtom(financialPlanAtom);

    return useMutation({
        mutationFn: (data: IUpdateFinancialPlanRequest) => financialPlanService.update(data),
        onSuccess: (data) => {
            toast.success("Financial plan updated successfully");
            setFinancialPlan(prev => {
                return prev.map(plan => plan.id === data.id ? data : plan)
            });
        },
        onError: (err) => {
            toast.error(err.message);
        } 
    })

}