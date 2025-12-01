"use client"

import useGetAllFinancialPlans from "@/features/financial-plans/hooks/use-get-all-financial-plans"
import LoadingSpinner from "@/shared/components/loading-spinner"
import PaginationWrapper from "@/shared/components/pagination-wrapper"
import { Card, CardContent } from "@/shared/components/ui/card"
import { ScrollArea } from "@/shared/components/ui/scroll-area"
import { financialPlanAtom } from "@/stores/financial-plan-store"
import { useAtom, useAtomValue } from "jotai"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import EmptyFinancialPlan from "./empty-financial-plan"
import FinancialPlanTag from "./financial-plan-tag"
import { IFinancialPlanTag } from "@/features/financial-plans/models/financial-plan-model"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/shared/components/ui/dropdown-menu"
import { EllipsisIcon, PencilIcon, TrashIcon } from "lucide-react"
import { filtersAtom } from "@/stores/filters-store"

export default function FinancialPlanDisplayer() {
    const filters = useAtomValue(filtersAtom);

    const { isPending, isSuccess, data } = useGetAllFinancialPlans({ 
        page: 1, 
        pageSize: 10, 
        name: filters.nameFilter,
        orderBy: filters.orderBy,
        dateFilter: filters.dateFilter,
        orderDirection: filters.orderDirection
    })

    const [financialPlans, setFinancialPlans] = useAtom(financialPlanAtom);

    const router = useRouter();

    useEffect(() => {
        if (isSuccess && data) {
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
                            className="relative cursor-pointer transition rounded-xl shadow-sm border-green-500 hover:bg-green-700 hover:text-white hover:shadow-lg dark:border-green-500 dark:hover:border-green-200"
                        >

                            <DropdownMenu>
                                <DropdownMenuTrigger className="absolute top-2 right-4 cursor-pointer">
                                    <EllipsisIcon className="hover:text-green-600" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        Delete <TrashIcon />
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Edit <PencilIcon />
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

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
                                    {plan.updatedAt.toString() != "0001-01-01T00:00:00" ? (
                                        <span>
                                            Última actualización {" "}
                                            {new Date(plan.updatedAt).toLocaleDateString("es-AR")}
                                        </span>
                                    ) : (
                                        <span>Sin actualizaciones</span>
                                    )}
                                </div>
                                <FinancialPlanTag tags={plan.tags as IFinancialPlanTag[]} />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </ScrollArea>
            <PaginationWrapper />
        </div>
    )
}