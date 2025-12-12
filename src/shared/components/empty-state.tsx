import { ReactNode } from "react"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "./ui/empty"

interface INotContentFoundProps {
    icon: ReactNode,
    title: string,
    description: string,
    content: ReactNode
}

export default function EmptyState({ icon, title, description, content }: INotContentFoundProps) {
    return (
        <Empty className="mt-20">
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    {icon}
                </EmptyMedia>
                <EmptyTitle className="text-2xl mt-2">{title}</EmptyTitle>
                <EmptyDescription className="text-lg">
                    {description}
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                {content}
            </EmptyContent>
        </Empty>
    )
}