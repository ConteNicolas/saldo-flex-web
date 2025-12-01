import { IGetAllFinancialPlansRequest } from "../models/financial-plan-model";
import { useQuery } from "@tanstack/react-query";
import { financialPlanService } from "../services/financial-plan-service";


export default function useGetAllFinancialPlans(data: IGetAllFinancialPlansRequest) {
    return useQuery({
        queryKey: ["financial-plans", data],
        queryFn: async () => financialPlanService.getAll(data),
        refetchIntervalInBackground: false,
        refetchOnReconnect: false
    })
}