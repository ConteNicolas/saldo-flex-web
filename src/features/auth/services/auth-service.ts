import { BaseService } from "@/shared/services/base-service";
import { ISignInRequest, ISignInResponse, ISignUpRequest } from "../models/auth-model";
import { getErrorMessageResponse } from "@/shared/lib/utils";


export class AuthService extends BaseService {
    constructor() {
        super(false);
    }

    async signUp(request: ISignUpRequest) : Promise<string> {
        try {
            const response = await this.api.post<string>("auth/sign-up", request);

            return "The user has been created successfully";

        } catch(err: any) {
            throw new Error(getErrorMessageResponse(err));
        }
    }    

    async signIn(request: ISignInRequest) : Promise<ISignInResponse> {
        try {
            const response = await this.api.post<ISignInResponse>("auth/sign-in", request);

            return response.data;

        } catch(err: any) {
            throw new Error(getErrorMessageResponse(err));
        }
    }
}

export const authService = new AuthService();