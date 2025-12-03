import { BaseService } from "@/shared/services/base-service";
import { ICreateFinancialPlanRequest, ICreateFinancialPlanResponse, IGetAllFinancialPlansRequest, IGetAllFinancialPlansResponse, IUpdateFinancialPlanReponse, IUpdateFinancialPlanRequest, IUpdateFinancialPlanStatusRequest, IUpdateFinancialPlanStatusResponse } from "../models/financial-plan-model";
import { IPaginatedResult } from "@/shared/models/pagination-model";
import { getErrorMessageResponse, parseObjToQueryString } from "@/shared/lib/utils";


class FinancialPlanService extends BaseService {
    constructor() {
        super(true);
    }

    async getAll(req: IGetAllFinancialPlansRequest): Promise<IPaginatedResult<IGetAllFinancialPlansResponse>> {
        try {
            const queryString = parseObjToQueryString(req);
            const response = await this.api.get<IPaginatedResult<IGetAllFinancialPlansResponse>>(`financial-plans?${queryString}`);

            return response.data;
        } catch (err) {
            throw new Error(getErrorMessageResponse(err));
        }
    }

    async create(req: ICreateFinancialPlanRequest) : Promise<ICreateFinancialPlanResponse> {
        try {
            const response = await this.api.post<ICreateFinancialPlanResponse>("financial-plans", req);

            return response.data;
        } catch(err) {
            throw new Error(getErrorMessageResponse(err));
        }
    }

    async delete(id: string): Promise<void> {
        try {
            const response = await this.api.delete(`financial-plans/${id}`);

            return response.data;
        } catch(err) {
            throw new Error(getErrorMessageResponse(err));
        }
    }

    async update(req: IUpdateFinancialPlanRequest) : Promise<IUpdateFinancialPlanReponse> {
        try {
            const response = await this.api.put<IUpdateFinancialPlanReponse>(`financial-plans/${req.id}`, req);

            return response.data;
        } catch(err) {
            throw new Error(getErrorMessageResponse(err));
        }
    }

    async updateStatus(req: IUpdateFinancialPlanStatusRequest) : Promise<IUpdateFinancialPlanStatusResponse> {
        try {
            const response = await this.api.put<IUpdateFinancialPlanStatusResponse>(`financial-plans/${req.id}/status`, { });

            return response.data;
        } catch(err) {
            throw new Error(getErrorMessageResponse(err));
        }
    }    
}

export const financialPlanService = new FinancialPlanService();