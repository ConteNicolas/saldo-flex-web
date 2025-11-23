import NavigationItems from "./components/navigation-items";
import NavigationIcon from "./components/navigation-icon";
import NavigationActions from "./components/navigation-actions";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
    return (
        <div className="w-full h-full bg-white">
            <div className="w-full h-full bg-linear-to-br from-[#eab4fb] via-[#ddc6f8] to-[#98b8e1]">

                <div className="w-full h-[10%] flex flex-row">
                    <div className="w-[35%] h-full flex items-center justify-center">
                        <NavigationIcon />
                    </div>
                    <div className="w-[30%] h-full flex flex-row items-center justify-center">
                        <NavigationItems />
                    </div>
                    <div className="w-[35%] h-full flex items-center justify-center">
                        <NavigationActions />
                    </div>
                </div>

                <div className="w-full h-[85%] flex flex-col items-center justify-center">
                    <span className="text-center text-6xl font-semibold text-shadow-sm text-shadow-slate-800">
                        Finance your way with{" "}
                        <span className="text-purple-500 text-6xl font-bold text-shadow-md text-shadow-purple-600">
                            Saldo Flex
                        </span>
                    </span>

                    <span className="text-center text-xl font-medium text-slate-500 mt-6">
                        A flexible budgeting platform designed to fit your lifestyle.
                    </span>

                    <Button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded cursor-pointer font-light text-md w-38 h-12 mt-12 shadow-md shadow-purple-400">
                        <Link href={"/sign-up"}>Get started</Link>
                    </Button>
                </div>

                <div className="w-full h-[5%] flex items-center justify-center">
                    <span className="text-sm">&copy; 2025 - Saldo flex</span>
                </div>
            </div>

        </div>
    )
}