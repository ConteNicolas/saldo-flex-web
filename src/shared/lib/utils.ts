import { AxiosError } from "axios";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getErrorMessageResponse(error: any): string {
    if (error instanceof AxiosError) {
        return error.response?.data?.message || error.message || "An error occurred";
    }

    return String(error);
}