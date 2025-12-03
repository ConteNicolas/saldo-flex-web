import { CheckIcon, XIcon } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";

interface IConfirmDeleteAlertProps {
    open: boolean;
    setOpen: (o: boolean) => void,
    title: string;
    description: string;
    onConfirm: () => void
}

export default function ConfirmDeleteAlert({
    open,
    setOpen,
    title,
    description,
    onConfirm,
}: IConfirmDeleteAlertProps) {
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {title}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="bg-red-500! hover:bg-red-600! cursor-pointer text-white rounded-full mr-3" onClick={() => setOpen(false)}>
                        Cancel <XIcon />
                    </AlertDialogCancel>
                    <AlertDialogAction className="bg-green-500! hover:bg-green-600! cursor-pointer text-white rounded-full" onClick={onConfirm}>
                        Confirm <CheckIcon />
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}