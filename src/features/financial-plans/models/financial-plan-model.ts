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
}

export interface ICreateFinancialPlanRequest {
    name: string;
    description?: string;
}

