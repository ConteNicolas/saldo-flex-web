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