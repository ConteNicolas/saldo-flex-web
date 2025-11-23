import { Button } from "@/shared/components/ui/button";
import Link from "next/link";


export default function NavigationActions() {
    return (
        <>
            <Button className="px-4 py-2 rounded bg-transparent text-black hover:text-purple-500 hover:bg-transparent cursor-pointer mr-6 font-light text-md">
                <Link href={"/sign-in"}>Sign in</Link>
            </Button>
            <Button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded cursor-pointer font-light text-md w-34 h-12 shadow-md shadow-purple-400">
                <Link href={"/sign-up"}>Sign up</Link>
            </Button>
        </>
    )
}