import { getErrorMessageResponse } from "@/shared/lib/utils";
import { IGetMeResponse } from "../models/user-model";
import { BaseService } from "@/shared/services/base-service";


class UserService extends BaseService {
    constructor() {
        super(true)
    }

    async getMe(): Promise<IGetMeResponse> {
        try {
            const response = await this.api.get<IGetMeResponse>('/users/me');
            return response.data;
        } catch(err: any) {
            throw new Error(getErrorMessageResponse(err));
        }
    }
}

export const userService = new UserService();