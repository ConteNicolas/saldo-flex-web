import { BaseService } from "@/shared/services/base-service";
import { ICreateTagRequest, ICreateTagResponse, IGetAllTagsRequest, IGetAllTagsResponse, IUpdateTagRequest, IUpdateTagResponse } from "../models/tag-model";
import { getErrorMessageResponse, parseObjToQueryString } from "@/shared/lib/utils";
import { IPaginatedResult } from "@/shared/models/pagination-model";


class TagService extends BaseService {
    constructor() {
        super(true)
    }

    async create(req: ICreateTagRequest) : Promise<ICreateTagResponse> {
        try {
            const response = await this.api.post<ICreateTagResponse>("tags", req);

            return response.data
        } catch(err) {
            throw new Error(getErrorMessageResponse(err));
        }
    }


    async update(req: IUpdateTagRequest) : Promise<IUpdateTagResponse> {
        try {
            const response = await this.api.put<IUpdateTagResponse>(`tags/${req.id}`, req);

            return response.data
        } catch(err) {
            throw new Error(getErrorMessageResponse(err));
        }
    }


    async delete(id: string) : Promise<void> {
        try {
            const response = await this.api.delete(`tags/${id}`);
            return response.data;
        } catch(err) {
            throw new Error(getErrorMessageResponse(err));
        }
    }

    async getAll(req: IGetAllTagsRequest) : Promise<IPaginatedResult<IGetAllTagsResponse>> {
        try {
            const queryString = parseObjToQueryString(req);
            const response = await this.api.get<IPaginatedResult<IGetAllTagsResponse>>(`tags?${queryString}`);

            return response.data;
        } catch(err) {
            throw new Error(getErrorMessageResponse(err));
        }
    }
}

export const tagService = new TagService();