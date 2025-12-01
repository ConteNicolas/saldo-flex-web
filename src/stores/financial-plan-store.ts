import { IFinancialPlan } from "@/features/financial-plans/models/financial-plan-model";
import { atom } from "jotai";

export interface IFinancialPlanStore extends IFinancialPlan { }

export const financialPlanAtom = atom<IFinancialPlanStore[]>([]);