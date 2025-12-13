"use client"

import useDeleteTag from "@/features/tags/hooks/use-delete-tag";
import { ITag } from "@/features/tags/models/tag-model";
import ConfirmAlert from "@/shared/components/confirm-alert";
import LoadingSpinner from "@/shared/components/loading-spinner";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/shared/components/ui/dropdown-menu";
import { EllipsisIcon, TrashIcon, PencilIcon } from "lucide-react";
import { useState } from "react";
import EditTagSheet from "./edit-tag-sheet";

interface TagTableMenuProps {
    tag: ITag;
}


export default function TagTableMenu({ tag }: TagTableMenuProps) {
    const { mutateAsync, isPending: isDeletePending } = useDeleteTag();

    const [editSheetOpen, setEditSheetOpen] = useState(false);
    const [confirmAlertOpen, setConfirmAlertOpen] = useState(false);

    if (isDeletePending) {
        return (
            <LoadingSpinner />
        )
    }

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger className="cursor-pointer">
                    <EllipsisIcon className="hover:text-green-600" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem className="w-full flex flex-row items-center justify-between p-3 cursor-pointer" onClick={() => setEditSheetOpen(true)}>
                        Edit <PencilIcon />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="w-full flex flex-row items-center justify-between p-3 cursor-pointer" onClick={() => setConfirmAlertOpen(true)}>
                        Delete <TrashIcon />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <EditTagSheet open={editSheetOpen} setOpen={setEditSheetOpen} tag={tag} />
            <ConfirmAlert
                open={confirmAlertOpen}
                setOpen={setConfirmAlertOpen}
                title={`Are you sure you want to delete "${tag.name}"?`}
                description="This action cannot be undone."
                onConfirm={() => mutateAsync(tag.id)}
            />
        </>

    )
}