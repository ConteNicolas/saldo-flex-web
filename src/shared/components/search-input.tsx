"use client"

import { SearchIcon } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "./ui/input-group";

interface ISearchInputProps {
    className?: string;
    onValueChange?: (value: any) => void,
    onEnterPressed?: () => void,
    onButtonPressed?: () => void,
    placeholder?: string
}

export default function SearchInput({
    className,
    onValueChange,
    onEnterPressed,
    onButtonPressed,
    placeholder
}: ISearchInputProps) {
    return (
        <InputGroup className={className}>
            <InputGroupInput onChange={(e) => onValueChange?.(e.target.value)} onKeyUpCapture={(e) => e.key === "Enter" && onEnterPressed?.()} placeholder={placeholder || "Search..."} />
            <InputGroupAddon>
                <SearchIcon />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
                <InputGroupButton onClick={onButtonPressed}>Search</InputGroupButton>
            </InputGroupAddon>
        </InputGroup>
    )
}