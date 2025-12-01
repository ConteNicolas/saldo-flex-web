export interface IFinancialPlan {
    id: string;
    name: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IGetAllFinancialPlansRequest {
    page: number;
    pageSize: number;
    name?: string;
}

export interface IGetAllFinancialPlansResponse {
    id: string;
    name: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ICreateFinancialPlanRequest {
    name: string;
    description?: string;
}

export interface ICreateFinancialPlanResponse {
    id: string;
    name: string;
    description?: string;
}
