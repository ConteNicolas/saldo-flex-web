import { useAtom } from "jotai";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "./ui/pagination";
import { paginationAtom } from "@/stores/pagination-store";

export default function PaginationWrapper() {
    const [pagination, setPagination] = useAtom(paginationAtom);
    const { page: currentPage, totalPages, hasPreviousPage, hasNextPage } = pagination;

    const pagesToRender = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href="#"
                        isActive={!hasPreviousPage}
                        onClick={() =>
                            setPagination((prev) => ({
                                ...prev,
                                page: Math.max(1, prev.page - 1),
                            }))
                        }
                    />
                </PaginationItem>

                {pagesToRender.map((page) => (
                    <PaginationItem key={page}>
                        <PaginationLink
                            href="#"
                            isActive={page === currentPage}
                            onClick={() =>
                                setPagination((prev) => ({ ...prev, page: page }))
                            }
                        >
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                {totalPages > 5 && <PaginationEllipsis />}

                <PaginationItem>
                    <PaginationNext
                        href="#"
                        isActive={!hasNextPage}
                        onClick={() =>
                            setPagination((prev) => ({
                                ...prev,
                                page: Math.min(totalPages, prev.page + 1),
                            }))
                        }
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>

    )
}