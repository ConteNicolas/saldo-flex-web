import { Button } from "@/shared/components/ui/button";
import SignInForm from "./components/sign-in-form";
import Link from "next/link";


export default function SignInPage() {
    return (
        <div className="w-full h-full flex flex-row">
            <div className="w-[50%] h-full bg-slate-100">
                <SignInForm />
            </div>
            <div className="w-[50%] h-full flex flex-col items-center justify-center bg-linear-to-br from-[#eab4fb] via-[#ddc6f8] to-[#98b8e1] ">
                <h1 className="text-5xl font-bold">Glad to see you at <span className="text-purple-500 text-6xl">Saldo flex</span></h1>
                <span className="text-lg mt-4">Dont have an account?</span>
                <Button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 w-38 h-12 rounded cursor-pointer mt-10">
                    <Link href="/sign-up">Join us today</Link>
                </Button>
            </div>            
        </div>
    )
}