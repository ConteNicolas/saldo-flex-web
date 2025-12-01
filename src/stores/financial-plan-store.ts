import { atom } from "jotai";

export interface IFinancialPlanStore {
    id: string;
    name: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}

export const financialPlanAtom = atom<IFinancialPlanStore[]>([]);