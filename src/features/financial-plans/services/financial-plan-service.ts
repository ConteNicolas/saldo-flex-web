import { BaseService } from "@/shared/services/base-service";
import { IGetAllFinancialPlansRequest, IGetAllFinancialPlansResponse } from "../models/financial-plan-model";
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
}

export const financialPlanService = new FinancialPlanService();