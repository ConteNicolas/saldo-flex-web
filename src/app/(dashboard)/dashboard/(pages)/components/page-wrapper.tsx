import { ReactNode } from "react";
import PageHeader from "./page-header";
import { Separator } from "@/shared/components/ui/separator";
import PageFilters from "./page-filters";
import PageContent from "./page-content";


interface IPageWrapperProps {
    breadcrumb: [],
    headerTitle: string,
    headerTitleIcon: ReactNode,
    headerAction: ReactNode,
    children: ReactNode
}

export default function PageWrapper({
    breadcrumb,
    headerTitle,
    headerTitleIcon,
    headerAction,
    children
} : IPageWrapperProps) {
    return (
        <div className="w-full h-full dark:text-white flex justify-center">
            <div className="w-[88%] h-full flex flex-col">
                <PageHeader 
                    breadcrumb={breadcrumb}
                    headerTitle={headerTitle} 
                    headerTitleIcon={headerTitleIcon} 
                    headerAction={headerAction}
                /> 
                <Separator className="bg-green-500" />
                <PageFilters />
                <PageContent>
                    {children}
                </PageContent>
            </div>
        </div>
    )
}