import { DateFilterTypes } from "@/shared/enums/date-filter-types-enum";
import { OrderDirectionTypes } from "@/shared/enums/order-direction-types.enum";
import { OrderByTypes } from "@/shared/enums/orderby-types-enum";

export interface IFinancialPlan {
    id: string;
    name: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
    tags: IFinancialPlanTag[] 
}

export interface IFinancialPlanTag {
    id: string;
    name: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IGetAllFinancialPlansResponse extends IFinancialPlan { }

export interface ICreateFinancialPlanResponse extends IFinancialPlan { }

export interface IGetAllFinancialPlansRequest {
    page: number;
    pageSize: number;
    name?: string;
    dateFilter?: DateFilterTypes;
    orderBy?: OrderByTypes;
    orderDirection?: OrderDirectionTypes;
}

export interface ICreateFinancialPlanRequest {
    name: string;
    description?: string;
}

