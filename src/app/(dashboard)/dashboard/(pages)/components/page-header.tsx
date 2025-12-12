import Breadcrumbs from "@/shared/components/breadcrumbs"
import { ReactNode } from "react"



interface IPageHeaderProps {
    breadcrumb: [],
    headerTitle: string,
    headerTitleIcon: ReactNode,
    headerAction?: ReactNode    
}

export default function PageHeader({ breadcrumb, headerTitle, headerTitleIcon, headerAction }: IPageHeaderProps) {
    return (
        <div className="w-full h-[17%] flex flex-col py-6 items-start justify-end">
            <Breadcrumbs items={breadcrumb} />
            <div className="w-full flex flex-row items-center justify-between mt-10">
                <h1 className="text-2xl font-bold flex flex-row">
                    {headerTitle} {headerTitleIcon}
                </h1>
                {headerAction}        
            </div>
        </div>
    )
}