"use client"

import useGetAllTags from "@/features/tags/hooks/use-get-all-tags";
import EmptyState from "@/shared/components/empty-state";
import LoadingSpinner from "@/shared/components/loading-spinner";
import PaginationControls from "@/shared/components/pagination-controls";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/shared/components/ui/table";
import { useFilters } from "@/shared/hooks/use-filters";
import usePagination from "@/shared/hooks/use-pagination";
import { tagAtom } from "@/stores/tag-store";
import { useAtom } from "jotai";
import { TagsIcon } from "lucide-react";
import { useEffect } from "react";
import CreateTagSheet from "./create-tag-sheet";
import TagTableMenu from "./tag-table-menu";


export default function TagTable() {
    const { pagination, setPagination }= usePagination();
    const { filters } = useFilters();

    const { isPending, isSuccess, data } = useGetAllTags({
        page: pagination.page,
        pageSize: pagination.pageSize,
        name: filters.nameFilter,
        orderBy: filters.orderBy,
        dateFilter: filters.dateFilter,
        orderDirection: filters.orderDirection
    })

    const [tags, setTags] = useAtom(tagAtom);

    useEffect(() => {
        if (isSuccess && data) {
            setTags(data.items);
            setPagination((prev) => ({
                ...prev,
                page: data.currentPage,
                totalPages: data.totalPages,
                totalItems: data.totalItems,
                hasPreviousPage: data.hasPreviousPage,
                hasNextPage: data.hasNextPage,
            }));
        }
    }, [isSuccess, data, setTags, setPagination])


    if (isPending) {
        return <LoadingSpinner />
    }

    if (!tags.length) {
        return (
            <div className="w-full h-full">
                <EmptyState
                    title="No tags found"
                    description="You haven&apos;t created any tag yet. Get started by creating
                    your tag."
                    icon={<TagsIcon className="w-13! h-13!" />}
                    content={<CreateTagSheet />}
                />
            </div>
        )
    }

    return (
        <div className="w-full h-full">
            <Table className="w-full h-[85%]">
                <TableCaption>A list of your recent tags.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Creation date</TableHead>
                        <TableHead>Last update</TableHead>
                        <TableHead className="w-[100px]">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tags && tags.map(tag => 
                        <TableRow key={tag.id}>
                            <TableCell>{tag.name}</TableCell>
                            <TableCell>{new Date(tag.createdAt).toLocaleDateString("es-AR")}</TableCell>
                            <TableCell>{new Date(tag.updatedAt).toLocaleDateString("es-AR")}</TableCell>
                            <TableCell className="w-[100px] flex justify-center items-center">
                                <TagTableMenu tag={tag} />                                
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className="mt-10">
                <PaginationControls />
            </div>
        </div>
    )
}