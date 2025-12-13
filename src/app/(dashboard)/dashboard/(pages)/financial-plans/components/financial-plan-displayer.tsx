"use client"

import useGetAllFinancialPlans from "@/features/financial-plans/hooks/use-get-all-financial-plans"
import LoadingSpinner from "@/shared/components/loading-spinner"
import PaginationControls from "@/shared/components/pagination-controls"
import { Card, CardContent } from "@/shared/components/ui/card"
import { ScrollArea } from "@/shared/components/ui/scroll-area"
import { financialPlanAtom } from "@/stores/financial-plan-store"
import { useAtom, useAtomValue } from "jotai"
import { useEffect } from "react"
import FinancialPlanStatusTag from "./financial-plan-status-tag"
import FinancialPlanCardMenu from "./financial-plan-card-menu"
import Link from "next/link"
import { ArrowRightIcon, ClipboardPenIcon } from "lucide-react"
import EmptyState from "@/shared/components/empty-state"
import CreateFinancialPlanSheet from "./create-financial-plan-sheet"
import usePagination from "@/shared/hooks/use-pagination"
import { useFilters } from "@/shared/hooks/use-filters"

export default function FinancialPlanDisplayer() {
    const { pagination, setPagination } = usePagination();
    const { filters } = useFilters();

    const { isPending, isSuccess, data } = useGetAllFinancialPlans({
        page: pagination.page,
        pageSize: pagination.pageSize,
        name: filters.nameFilter,
        orderBy: filters.orderBy,
        dateFilter: filters.dateFilter,
        orderDirection: filters.orderDirection
    })

    const [financialPlans, setFinancialPlans] = useAtom(financialPlanAtom);

    useEffect(() => {
        if (isSuccess && data) {
            setFinancialPlans(data.items);
            setPagination((prev) => ({
                ...prev,
                page: data.currentPage,
                totalPages: data.totalPages,
                totalItems: data.totalItems,
                hasPreviousPage: data.hasPreviousPage,
                hasNextPage: data.hasNextPage,
            }));
        }
    }, [isSuccess, data, setFinancialPlans, setPagination])


    if (isPending) {
        return <LoadingSpinner />
    }

    if (!financialPlans.length) {
        return (
            <div className="w-full h-full">
                <EmptyState
                    title="No financial plan Yet"
                    description="You haven&apos;t created any plan yet. Get started by creating
                    your financial plan."
                    icon={<ClipboardPenIcon className="w-13! h-13!" />}
                    content={<CreateFinancialPlanSheet />}
                />
            </div>
        )
    }

    return (
        <div className="w-full h-full">
            <ScrollArea className="w-full h-[85%] mt-4">
                <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6">
                    {financialPlans?.map((plan) => (
                        <Card
                            key={plan.id}
                            className="relative transition rounded-xl shadow-sm border-green-500 hover:bg-green-700 hover:text-white hover:shadow-lg dark:border-green-500 dark:hover:border-green-200"
                        >
                            <FinancialPlanCardMenu financialPlan={plan} />
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
                                        Creation date:{" "}
                                        {new Date(plan.createdAt).toLocaleDateString("es-AR")}
                                    </span>
                                    {plan.updatedAt ? (
                                        <span>
                                            Last update {" "}
                                            {new Date(plan.updatedAt).toLocaleDateString("es-AR")}
                                        </span>
                                    ) : (
                                        <span>No updates</span>
                                    )}
                                </div>
                                <FinancialPlanStatusTag financialPlan={plan} />
                                <Link className="text-xs bottom-5 right-6 absolute hover:text-green-300 flex flex-row items-center justify-center" href={`/dashboard/financial-plans/${plan.id}`}>
                                    See more <ArrowRightIcon className="w-4! h-4! ml-1" />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </ScrollArea>
            <PaginationControls />
        </div>
    )
}