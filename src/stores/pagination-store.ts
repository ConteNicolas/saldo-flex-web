import { atom } from "jotai";

export interface IPaginationStore {
  page: number;
  pageSize: number;   // pageSize que pedimos
  totalPages: number;
  totalItems: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export const paginationAtom = atom<IPaginationStore>({
  page: 1,
  pageSize: 10,
  totalPages: 1,
  totalItems: 0,
  hasPreviousPage: false,
  hasNextPage: false,
});
