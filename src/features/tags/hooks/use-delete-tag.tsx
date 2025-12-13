import { useMutation } from "@tanstack/react-query";
import { tagService } from "../services/tag-service";
import { toast } from "sonner";
import { useSetAtom } from "jotai";
import { tagAtom } from "@/stores/tag-store";


export default function useDeleteTag() {
    const setTags = useSetAtom(tagAtom);

    return useMutation({
        mutationFn: (id: string) => tagService.delete(id),
        onSuccess: (_, id) => {
            toast.success("Tag deleted successfully");   
            setTags(prev => prev.filter(tag => tag.id !== id));
        },
        onError: (err) => {
            toast.error(err.message);
        }
    })
}