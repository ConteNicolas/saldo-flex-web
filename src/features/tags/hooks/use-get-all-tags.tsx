import { useQuery } from "@tanstack/react-query";
import { tagService } from "../services/tag-service";
import { IGetAllTagsRequest } from "../models/tag-model";



export default function useGetAllTags(data: IGetAllTagsRequest) {
    return useQuery({
        queryKey: ["tags", data],
        queryFn: () => tagService.getAll(data),
        refetchIntervalInBackground: false,
        refetchOnReconnect: false        
    })
}