"use client"

import Filters from "@/shared/components/filters";
import { useFilters } from "@/shared/hooks/use-filters";


export default function FinancialPlanFilters() {    
    const { resetFilters } = useFilters();
    resetFilters();

    return (
        <Filters />
    )
}