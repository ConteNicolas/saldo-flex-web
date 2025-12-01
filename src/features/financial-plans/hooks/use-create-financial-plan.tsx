import { useMutation } from "@tanstack/react-query";
import { financialPlanService } from "../services/financial-plan-service";
import { ICreateFinancialPlanRequest, ICreateFinancialPlanResponse } from "../models/financial-plan-model";
import { toast } from "sonner";
import { useSetAtom } from "jotai";
import { financialPlanAtom, IFinancialPlanStore } from "@/stores/financial-plan-store";


export default function useCreateFinancialPlan() {
    const setFinancialPlan = useSetAtom(financialPlanAtom);

    return useMutation({
        mutationFn: (data: ICreateFinancialPlanRequest) => financialPlanService.create(data),
        onSuccess: (data) => {
            toast.success("Financial plan created successfully");
            setFinancialPlan(items => [...items, data as IFinancialPlanStore]);
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })
}