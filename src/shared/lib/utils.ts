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

export function parseObjToQueryString(obj: any) {
  return Object.keys(obj)
    .filter(key => obj[key] !== null && obj[key] !== undefined)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join("&");
}