import { Button } from "@/shared/components/ui/button";
import SignInForm from "./components/sign-in-form";
import Link from "next/link";


export default function SignInPage() {
    return (
        <div className="w-full h-full flex flex-row">
            <Link href="/" className="text-4xl font-light absolute top-6 left-15 text-green-500">Saldo flex</Link>
            <div className="w-[50%] h-full bg-slate-100">
                <SignInForm />
            </div>
            <div className="w-[50%] h-full flex flex-col items-center justify-center bg-linear-to-r from-[#f1f5f9] via-[#bbe4bb] to-[#95f66b]">
                <h1 className="text-5xl font-bold">Glad to see you at <span className="text-green-500 text-6xl">Saldo flex</span></h1>
                <span className="text-lg mt-4">Dont have an account?</span>
                <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 w-38 h-12 rounded-full cursor-pointer mt-10">
                    <Link href="/sign-up">Join us today</Link>
                </Button>
            </div>            
        </div>
    )
}