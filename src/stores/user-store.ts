import { atom } from "jotai";


export interface IUserStore {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    alias: string;
}

export const userAtom = atom<IUserStore>({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    alias: ""
})