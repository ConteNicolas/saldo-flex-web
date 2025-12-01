import { Separator } from "@/shared/components/ui/separator"
import FinancialPlanHeader from "./components/financial-plan-header"
import FinancialPlanFilters from "./components/financial-plan-filters"
import FinancialPlanDisplayer from "./components/financial-plan-displayer"


export default function FinancialPlansPage() {
    return (
        <div className="w-full h-full dark:text-white flex justify-center">
            <div className="w-[88%] h-full flex flex-col">
                <FinancialPlanHeader />
                <Separator className="bg-green-500" />
                <FinancialPlanFilters />
                <FinancialPlanDisplayer />
            </div>
        </div>
    )
}