import { atom } from "jotai";


export interface IUserAtom {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    alias: string;
}

export const userAtom = atom<IUserAtom>({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    alias: ""
})