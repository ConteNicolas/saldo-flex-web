import { useMutation } from "@tanstack/react-query";
import { financialPlanService } from "../services/financial-plan-service";
import { ICreateFinancialPlanRequest } from "../models/financial-plan-model";
import { toast } from "sonner";
import { useSetAtom } from "jotai";
import { financialPlanAtom, IFinancialPlanStore } from "@/stores/financial-plan-store";


export default function useCreateFinancialPlan() {
    const setFinancialPlan = useSetAtom(financialPlanAtom);

    return useMutation({
        mutationFn: (data: ICreateFinancialPlanRequest) => financialPlanService.create(data),
        onSuccess: (data) => {
            const plan = data as IFinancialPlanStore;
            toast.success("Financial plan created successfully");

            setFinancialPlan((prev) => {
                const newestPlans = [plan, ...prev];
                return newestPlans.slice(0, 10);
            });
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })
}