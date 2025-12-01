import { DateFilterTypes } from "@/shared/enums/date-filter-types-enum";
import { OrderDirectionTypes } from "@/shared/enums/order-direction-types.enum";
import { OrderByTypes } from "@/shared/enums/orderby-types-enum";
import { atom } from "jotai";


export interface IFilterStore {
    dateFilter: DateFilterTypes;
    orderBy: OrderByTypes;
    orderDirection: OrderDirectionTypes;
    nameFilter: string | undefined;
}

export const filtersAtom = atom<IFilterStore>({
    dateFilter: DateFilterTypes.None,
    orderBy: OrderByTypes.CreationDate,
    orderDirection: OrderDirectionTypes.Descending,
    nameFilter: undefined
});
