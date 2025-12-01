import { Fragment } from "react/jsx-runtime";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "./ui/breadcrumb";

interface IBreadcrumbWrapperItem {
    label: string;
    href: string;
}

interface IBreadcrumbWrapperProps {
    items: IBreadcrumbWrapperItem[];
}

export default function BreadcrumbWrapper({ items }: IBreadcrumbWrapperProps) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {items.map((item, index) => (
                    <Fragment key={index}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                        </BreadcrumbItem>
                        { index === items.length - 1 ?  null : <BreadcrumbSeparator />}
                    </Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}