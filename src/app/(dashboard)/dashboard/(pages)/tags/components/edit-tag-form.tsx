"use client"

import useUpdateTag from "@/features/tags/hooks/use-update-tag";
import { ITag } from "@/features/tags/models/tag-model";
import LoadingSpinner from "@/shared/components/loading-spinner";
import { Button } from "@/shared/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { SaveIcon } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import z from "zod";


const schema = z.object({
    name: z.string().min(1, "Name must be at least 3 characters long"),
})

interface IEditTagFormProps {
    closeSheet: () => void,
    tag: ITag
}


export function EditTagForm( { closeSheet, tag }: IEditTagFormProps ) {
    const { mutateAsync, isPending, isSuccess } = useUpdateTag();

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: tag.name
        }
    })

    const onSubmit = async (values: z.infer<typeof schema>) => {
        const req = {
            id: tag.id,
            name: values.name,
        } 
        await mutateAsync(req);
        form.reset();
    }

    useEffect(() => {
        if (isSuccess) {
            closeSheet();
        }
    }, [isSuccess])

    if (isPending) {
        return <LoadingSpinner />
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-start">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-1 w-[90%]">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="mt-6">
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input className="h-12 border-green-300 focus-visible:border-purple-500 focus-visible:ring-0 focus-visible:ring-purple-500" placeholder="E.g. My first salary plan" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="bg-green-500 hover:bg-green-600 transition cursor-pointer text-white w-full mt-18" type="submit">
                        Save changes <SaveIcon />
                    </Button>                    
                </form>
            </Form>
        </div>
    )
}