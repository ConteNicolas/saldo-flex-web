import { Button } from "@/shared/components/ui/button";
import SignUpForm from "./components/sign-up-form";
import Link from "next/link";


export default function SignUpPage() {
    return (
        <div className="w-full h-full flex flex-row">
            <Link href="/" className="text-4xl font-light absolute top-6 left-15 text-white">Saldo flex</Link>
            <div className="w-[60%] h-full flex flex-col items-center justify-center bg-linear-to-r from-[#95f66b] via-[#bbe4bb] to-[#f1f5f9]">
                <h1 className="text-5xl font-bold dark:text-black">Welcome to <span className="text-green-500 text-6xl">Saldo flex</span></h1>
                <span className="text-lg dark:text-black mt-4">Already have an account?</span>
                <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 w-38 h-12 rounded-full cursor-pointer mt-10">
                    <Link href="/sign-in">Go and sign in</Link>
                </Button>
            </div>
            <div className="w-[40%] h-full bg-slate-100">
                <SignUpForm />
            </div>
        </div>
    )
}