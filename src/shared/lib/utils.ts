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


export function getRelativeTime(date: Date): string {
    if (!date) {
        return "";
    }

    const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return `${interval} hours`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return `${interval} months`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return `${interval} days`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return `${interval} hours`;
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return `${interval} minutes`;
    }
    return `${Math.floor(seconds)} seconds`;
}