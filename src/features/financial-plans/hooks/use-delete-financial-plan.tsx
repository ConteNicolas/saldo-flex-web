import { useMutation } from "@tanstack/react-query";
import { financialPlanService } from "../services/financial-plan-service";
import { toast } from "sonner";
import { useSetAtom } from "jotai";
import { financialPlanAtom } from "@/stores/financial-plan-store";



export default function useDeleteFinancialPlan() {
    const setFinancialPlan = useSetAtom(financialPlanAtom);

    return useMutation({
        mutationFn: (id: string) => financialPlanService.delete(id),
        onSuccess: (_, id) => {
            toast.success("Financial plan deleted successfully")
            setFinancialPlan(prev => prev.filter(plan => plan.id !== id))
        },
        onError: (err) => {
            toast.error(err.message)
        }
    })    
}