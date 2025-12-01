import SearchInput from "@/shared/components/search-input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/shared/components/ui/select";



export default function FinancialPlanFilters() {
    return (
        <div className="w-full h-[13%] flex flex-row">
            <div className="w-[40%] h-full flex items-center justify-start">
                <SearchInput className="w-full h-13 border-green-500" />
            </div>
            <div className="w-[60%] h-full flex items-center justify-end">
                <Select>
                    <SelectTrigger className="w-[250px] h-13! mr-12 border-green-500">
                        <SelectValue placeholder="Filter by date" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Fechas</SelectLabel>
                            <SelectItem value="apple">Today</SelectItem>
                            <SelectItem value="banana">Last week</SelectItem>
                            <SelectItem value="blueberry">Last month</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger className="w-[250px] h-13! border-green-500">
                        <SelectValue placeholder="Sort by date" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Sorts</SelectLabel>
                            <SelectItem value="apple">Creation date</SelectItem>
                            <SelectItem value="apple">Last update</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}