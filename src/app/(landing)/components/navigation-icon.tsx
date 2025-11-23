import { LandmarkIcon } from "lucide-react";

export default function NavigationIcon() {
    return (
        <div className="w-full h-full flex flex-row justify-center items-center">
            <LandmarkIcon className="text-purple-500 mr-2 mb-1" size={34} />
            <span className="text-purple-500 text-4xl font-bold">
                Saldo flex
            </span>
        </div>
    )
}