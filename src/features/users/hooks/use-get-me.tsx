import { useQuery } from "@tanstack/react-query";
import { userService } from "../services/user-service";


export default function useGetMe() {
    return useQuery({
        queryKey: ["user/me"],
        queryFn: async() => userService.getMe(),
        refetchIntervalInBackground: false,
        refetchOnReconnect: false,
    })    
}