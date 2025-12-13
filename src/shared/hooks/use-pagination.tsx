import { paginationAtom } from "@/stores/pagination-store";
import { useAtom } from "jotai";


export default function usePagination() {
    const [pagination, setPagination] = useAtom(paginationAtom);  
    return {
        pagination,
        setPagination
    }
}