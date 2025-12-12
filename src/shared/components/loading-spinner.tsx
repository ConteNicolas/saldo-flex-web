import { Spinner } from "./ui/spinner";

export default function LoadingSpinner() {
    return (
        <div className={`block`}>
            <div className={`flex flex-col justify-center items-center dark:bg-slate-800/50 bg-slate-200/50 bg-opacity-60 overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none`}>
                <Spinner className="absolute size-40 text-green-500" />
                <span className="absolute text-green-500 text-sm">Loading...</span>
            </div>
        </div>
    )
}