import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/shared/components/ui/select"
import { DateFilterTypes } from "../enums/date-filter-types-enum"
import { OrderDirectionTypes } from "../enums/order-direction-types.enum"
import { OrderByTypes } from "../enums/orderby-types-enum"
import SearchInput from "./search-input"
import { useFilters } from "../hooks/use-filters"


export default function Filters() {    
    const { setFilters } = useFilters();
    return (
        <div className="w-full h-[13%] flex flex-row">
            <div className="w-[40%] h-full flex items-center justify-start">
                <SearchInput onValueChange={(value) => setFilters(x => ({ ...x, nameFilter: value }))} className="w-full h-13 border-green-500" />
            </div>
            <div className="w-[60%] h-full flex items-center justify-end">
                <Select onValueChange={(value: string) => setFilters(x => ({ ...x, dateFilter: Number(value) }))}>
                    <SelectTrigger className="w-[220px] h-13! mr-6 border-green-500">
                        <SelectValue placeholder="Filter by date" />
                    </SelectTrigger>
                    <SelectContent defaultValue={DateFilterTypes.None.toString()}>
                        <SelectGroup>
                            <SelectLabel>Dates</SelectLabel>
                            <SelectItem value={DateFilterTypes.None.toString()}>All</SelectItem>
                            <SelectItem value={DateFilterTypes.Today.toString()}>Today</SelectItem>
                            <SelectItem value={DateFilterTypes.LastWeek.toString()}>Last week</SelectItem>
                            <SelectItem value={DateFilterTypes.LastMonth.toString()}>Last month</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Select onValueChange={(value: string) => setFilters(x => ({ ...x, orderBy: Number(value) }))}>
                    <SelectTrigger className="w-[220px] h-13! mr-6 border-green-500">
                        <SelectValue placeholder="Sort by date" />
                    </SelectTrigger>
                    <SelectContent defaultValue={OrderByTypes.CreationDate.toString()}>
                        <SelectGroup>
                            <SelectLabel>Sorts</SelectLabel>
                            <SelectItem value={OrderByTypes.CreationDate.toString()}>Creation date</SelectItem>
                            <SelectItem value={OrderByTypes.LastUpdate.toString()}>Last update</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Select onValueChange={(value: string) => setFilters(x => ({ ...x, orderDirection: Number(value) }))}>
                    <SelectTrigger className="w-[220px] h-13! border-green-500">
                        <SelectValue placeholder="Ordering direction" />
                    </SelectTrigger>
                    <SelectContent defaultValue={OrderDirectionTypes.Descending.toString()}>
                        <SelectGroup>
                            <SelectLabel>Directions</SelectLabel>
                            <SelectItem value={OrderDirectionTypes.Descending.toString()}>Descending</SelectItem>
                            <SelectItem value={OrderDirectionTypes.Ascending.toString()}>Ascending</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>                
            </div>
        </div>
    )
}