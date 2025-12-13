import { TagIcon } from "lucide-react";
import PageWrapper from "../components/page-wrapper";
import TagTable from "./components/tag-table";
import CreateTagSheet from "./components/create-tag-sheet";

const breadcrumb = [
    {
        label: "Dashboard",
        href: "/dashboard"
    },
    {
        label: "Tags",
        href: "/dashboard/tags"
    }
]

export default function TagPage() {
    return (
        <PageWrapper
            breadcrumb={breadcrumb as []}
            headerTitle="Tags"
            headerTitleIcon={<TagIcon className="ml-3 h-8 w-8" />}
            headerAction={<CreateTagSheet />}
        >
            <TagTable />
        </PageWrapper>
    )
}