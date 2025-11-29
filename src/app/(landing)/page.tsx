import NavigationItems from "./components/navigation-items";
import NavigationIcon from "./components/navigation-icon";
import NavigationActions from "./components/navigation-actions";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
    return (
        <div className="w-full h-full bg-slate-100">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#b7f1b9_0%,_#eefaf0_60%)]">
                <div className="w-full h-[13%] flex items-center justify-center">
                    <div className="w-[70%] h-[65%] flex flex-row bg-slate-100 rounded-full shadow-xl z-10 mt-6">
                        <div className="w-[30%] h-full flex flex-row justify-start items-center px-14">
                            <NavigationIcon />
                        </div>
                        <div className="w-[40%] h-full flex flex-row items-center justify-evenly">
                            <NavigationItems />
                        </div>
                        <div className="w-[30%] h-full flex items-center justify-end px-14">
                            <NavigationActions />
                        </div>
                    </div>
                </div>

                <div className="w-full h-[82%] flex flex-col items-center justify-center">
                    <span className="text-center text-6xl font-semibold text-shadow-sm text-shadow-slate-800">
                        Finance your way with{" "}
                        <span className="text-green-500 text-6xl font-bold text-shadow-md text-shadow-emerald-400-600">
                            Saldo Flex
                        </span>
                    </span>

                    <span className="text-center text-xl font-medium text-slate-500 mt-6">
                        A flexible budgeting platform designed to fit your lifestyle.
                    </span>

                    <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full cursor-pointer font-light text-md w-38 h-12 mt-12 shadow-md shadow-green-600">
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