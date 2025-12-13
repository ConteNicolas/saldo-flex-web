import { DateFilterTypes } from "@/shared/enums/date-filter-types-enum";
import { OrderDirectionTypes } from "@/shared/enums/order-direction-types.enum";
import { OrderByTypes } from "@/shared/enums/orderby-types-enum";


export interface ITag {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ICreateTagRequest {
    name: string;
}

export interface ICreateTagResponse extends ITag { }

export interface IGetAllTagsRequest {
    page: number;
    pageSize: number;
    name?: string;
    dateFilter?: DateFilterTypes;
    orderBy?: OrderByTypes;
    orderDirection?: OrderDirectionTypes;
}

export interface IGetAllTagsResponse extends ITag { }

export interface IUpdateTagRequest {
    id: string;
    name: string;
}

export interface IUpdateTagResponse extends ITag { }