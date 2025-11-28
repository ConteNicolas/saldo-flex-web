"use client"

import { useQuery } from "@tanstack/react-query"
import { userService } from "../services/user-service"


export default function useUser() {
    const getMe = useQuery({
        queryKey: ["user/me"],
        queryFn: async() => userService.getMe(),
        refetchIntervalInBackground: false,
        refetchOnReconnect: false,
    })

    return {
        getMe
    }
}