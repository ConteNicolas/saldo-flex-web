import { useMutation } from "@tanstack/react-query";
import { ICreateTagRequest } from "../models/tag-model";
import { tagService } from "../services/tag-service";
import { toast } from "sonner";
import { useSetAtom } from "jotai";
import { ITagStore, tagAtom } from "@/stores/tag-store";



export default function useCreateTag() {
    const setTags = useSetAtom(tagAtom);
    return useMutation({
        mutationFn: (data: ICreateTagRequest) => tagService.create(data),
        onSuccess: (data) => {
            toast.success("Tag has been created successfully");

            const tag = data as ITagStore;
            setTags((prev) => {
                const newestTags = [tag, ...prev];
                return newestTags.slice(0, 10);
            });
        },
        onError: (err) => {
            toast.error(err.message);
        }
    })
}