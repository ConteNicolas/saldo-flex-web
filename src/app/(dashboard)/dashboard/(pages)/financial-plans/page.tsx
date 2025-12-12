import FinancialPlanDisplayer from "./components/financial-plan-displayer"
import PageWrapper from "../components/page-wrapper"
import CreateFinancialPlanSheet from "./components/create-financial-plan-sheet"
import { ClipboardPenIcon } from "lucide-react"


const breadcrumb = [
    {
        label: "Dashboard",
        href: "/dashboard"
    },
    {
        label: "Financial plans",
        href: "/dashboard/financial-plans"
    }
]

export default function FinancialPlansPage() {
    return (
        <PageWrapper
            breadcrumb={breadcrumb as []}
            headerTitle="Financial plans"
            headerTitleIcon={<ClipboardPenIcon className="ml-3 h-8 w-8" />}
            headerAction={<CreateFinancialPlanSheet /> }
        >
            <FinancialPlanDisplayer />
        </PageWrapper>
    )
}