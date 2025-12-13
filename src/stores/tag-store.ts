import { ITag } from "@/features/tags/models/tag-model";
import { atom } from "jotai";


export interface ITagStore extends ITag { }

export const tagAtom = atom<ITagStore[]>([]);