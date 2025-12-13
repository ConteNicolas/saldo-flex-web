import { useMutation } from "@tanstack/react-query";
import { tagService } from "../services/tag-service";
import { IUpdateTagRequest } from "../models/tag-model";
import { toast } from "sonner";
import { useSetAtom } from "jotai";
import { tagAtom } from "@/stores/tag-store";



export default function useUpdateTag() {
    const setTag = useSetAtom(tagAtom);

    return useMutation({
        mutationFn: (data: IUpdateTagRequest) => tagService.update(data),
        onSuccess: (data) => {
            toast.success("Tag updated successfully");
            setTag(prev => [data, ...prev.filter(tag => tag.id !== data.id)]);
        },
        onError: (err) => {
            toast.error(err.message);
        }
    })
}