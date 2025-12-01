import { filtersAtom } from "@/stores/filters-store";
import { useSetAtom } from "jotai";
import { DateFilterTypes } from "../enums/date-filter-types-enum";
import { OrderByTypes } from "../enums/orderby-types-enum";
import { OrderDirectionTypes } from "../enums/order-direction-types.enum";


export function useFilters() {
    const setFilters = useSetAtom(filtersAtom)

    const resetFilters = () => {
        setFilters({
            dateFilter: DateFilterTypes.None,
            orderBy: OrderByTypes.CreationDate,
            orderDirection: OrderDirectionTypes.Descending,
            nameFilter: undefined
        })
    }
    
    return {
        setFilters,
        resetFilters
    }
}