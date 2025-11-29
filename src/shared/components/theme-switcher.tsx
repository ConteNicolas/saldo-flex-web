import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return (
        <Button className={`rounded-[50%] absolute top-5 right-10 size-10 text-white cursor-pointer ${theme === 'dark' ? 'bg-orange-500 hover:bg-orange-700' : 'bg-blue-600 hover:bg-blue-800'}`} onClick={changeTheme}>
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </Button>
    )
}