"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

export default function MainProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <React.Fragment>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
            <Toaster />
        </React.Fragment>
    );
}
