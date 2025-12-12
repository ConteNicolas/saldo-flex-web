import { ReactNode } from "react"


interface IPageContentProps {
    children: ReactNode
} 

export default function PageContent({ children } : IPageContentProps) {
    return (
        <div className="w-full h-[70%]">
            {children}
        </div>
    )
}