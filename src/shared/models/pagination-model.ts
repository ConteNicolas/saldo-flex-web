
export interface IPaginatedResult<T>{
    currentPage: number;
    totalPages: number;
    totalItems: number;
    items: T[]
}