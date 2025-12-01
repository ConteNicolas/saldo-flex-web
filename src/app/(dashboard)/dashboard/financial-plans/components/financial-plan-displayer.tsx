"use client"

import useGetAllFinancialPlans from "@/features/financial-plans/hooks/use-get-all-financial-plans"
import LoadingSpinner from "@/shared/components/loading-spinner"
import PaginationWrapper from "@/shared/components/pagination-wrapper"
import { Card, CardContent } from "@/shared/components/ui/card"
import { ScrollArea } from "@/shared/components/ui/scroll-area"
import { financialPlanAtom } from "@/stores/financial-plan-store"
import { useAtom } from "jotai"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import EmptyFinancialPlan from "./empty-financial-plan"

export default function FinancialPlanDisplayer() {
    const { isPending, isSuccess, data } = useGetAllFinancialPlans({ page: 1, pageSize: 10 })
    const [financialPlans, setFinancialPlans] = useAtom(financialPlanAtom);

    const router = useRouter();

    useEffect(() => {
        if (isSuccess && data) {
            console.log(data);
            setFinancialPlans(data.items);
        }
    }, [isSuccess, data])


    if (isPending) {
        return <LoadingSpinner />
    }

    if (!financialPlans.length) {
        return (
            <div className="w-full h-[70%]">
                <EmptyFinancialPlan />
            </div>
        )
    }

    return (
        <div className="w-full h-[70%]">
            <ScrollArea className="w-full h-[85%]">
                <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 p-2">
                    {financialPlans?.map((plan) => (
                        <Card
                            key={plan.id}
                            onClick={() => router.push(`/dashboard/financial-plans/${plan.id}`)}
                            className="cursor-pointer transition rounded-xl shadow-sm border-green-500 hover:bg-green-700 hover:text-white hover:shadow-lg dark:border-green-500 dark:hover:border-green-200"
                        >
                            <CardContent className="p-5 flex flex-col gap-3 min-w-0">

                                <h3 className="text-lg font-semibold leading-tight wrap-break-word truncate">
                                    {plan.name}
                                </h3>

                                {plan.description ? (
                                    <p className="text-sm hover:text-white wrap-break-word truncate">
                                        {plan.description}
                                    </p>
                                ) : (
                                    <p className="text-sm text-gray-400">Sin descripción</p>
                                )}

                                <div className="text-xs mt-auto opacity-70 flex flex-col gap-1">
                                    <span>
                                        Creado el:{" "}
                                        {new Date(plan.createdAt).toLocaleDateString("es-AR")}
                                    </span>
                                    <span>
                                        Última actualización {" "}
                                        {new Date(plan.updatedAt).toLocaleDateString("es-AR")}
                                    </span>
                                </div>

                            </CardContent>
                        </Card>
                    ))}
                </div>
            </ScrollArea>
            <PaginationWrapper />
        </div>
    )
}