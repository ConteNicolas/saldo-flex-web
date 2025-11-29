import { Button } from "@/shared/components/ui/button"


const items = {
    "Features": "",
    "Pricing": "",
    "Blog": "",
    "Contact": ""
}
export default function NavigationItems() {
    return (
        <>
            {Object.entries(items).map((key, value) =>
                <Button key={value} className="font-light text-md bg-transparent text-black hover:text-green-500 hover:bg-transparent cursor-pointer">{key}</Button>
            )}
        </>
    )
}