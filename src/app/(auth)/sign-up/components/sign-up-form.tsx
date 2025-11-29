"use client"

import useSignUp from "@/features/auth/hooks/use-sign-up";
import LoadingSpinner from "@/shared/components/loading-spinner";
import { Button } from "@/shared/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LogInIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";


const schema = z.object({
    username: z.string().min(3, "Name must be at least 3 characters long"),
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    firstname: z.string().nonempty("Firstname cannot be empty"),
    lastname: z.string().nonempty("Lastname cannot be empty")
})

export default function SignUpForm() {
    const { mutateAsync, isPending } = useSignUp();

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            firstname: "",
            lastname: ""
        }
    })

    const onSubmit = async(values: z.infer<typeof schema>) => {
        await mutateAsync(values);
        form.reset();
    }

    if (isPending) {
        return <LoadingSpinner />
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="dark:text-black text-3xl font-bold">Smart budgeting starts here 🚀</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-1 w-[65%]">
                    <FormField
                        control={form.control}
                        name="firstname"
                        render={({ field }) => (
                            <FormItem className="mt-8">
                                <FormLabel>First name</FormLabel>
                                <FormControl>
                                    <Input className="h-12 border-green-300 focus-visible:border-purple-500 focus-visible:ring-0 focus-visible:ring-purple-500" placeholder="E.g. John" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="lastname"
                        render={({ field }) => (
                            <FormItem className="mt-6">
                                <FormLabel>Last name</FormLabel>
                                <FormControl>
                                    <Input className="h-12 border-green-300 focus-visible:border-purple-500 focus-visible:ring-0 focus-visible:ring-purple-500" placeholder="E.g. Foo" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem className="mt-6">
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input className="h-12 border-green-300 focus-visible:border-purple-500 focus-visible:ring-0 focus-visible:ring-purple-500" placeholder="E.g. TheAmazingJohnFoo" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="mt-6">
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input className="h-12 border-green-300 focus-visible:border-purple-500 focus-visible:ring-0 focus-visible:ring-purple-500" placeholder="E.g. jfoo@gmail.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="mt-6">
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input className="h-12 border-green-300 focus-visible:border-purple-500 focus-visible:ring-0 focus-visible:ring-purple-500" type="password" placeholder="E.g. secretpassword" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button className="mt-8 bg-green-500 hover:bg-green-600 text-white px-4 py-2 w-full h-12 rounded-full cursor-pointer">Sign up <LogInIcon /> </Button>
                </form>
            </Form>
        </div>
    )
}