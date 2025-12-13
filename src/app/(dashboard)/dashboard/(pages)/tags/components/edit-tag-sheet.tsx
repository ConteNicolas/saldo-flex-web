import { ITag } from "@/features/tags/models/tag-model"
import { Button } from "@/shared/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/shared/components/ui/sheet"
import { XIcon } from "lucide-react"
import { EditTagForm } from "./edit-tag-form"

interface IEditTagSheetProps {
    tag: ITag,
    open: boolean,
    setOpen: (o: boolean) => void 
}

export default function EditTagSheet({ tag, open, setOpen }: IEditTagSheetProps) {
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent>
                <SheetHeader className="mt-10">
                    <SheetTitle>Edit financial plan</SheetTitle>
                    <SheetDescription>
                        Fill in the form below to update an existing financial plan.
                    </SheetDescription>
                </SheetHeader>
                <EditTagForm tag={tag} closeSheet={() => setOpen(false)} />
                <SheetFooter>
                    <SheetClose asChild>
                        <Button variant="outline" className="cursor-pointer">
                            Close <XIcon />
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}