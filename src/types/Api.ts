import { Ad } from "./Ad";

export interface PaginatedResponse<T> {
  items: T[];
  page: number;
  limit: number;
  total: number;
}

export type AdsListResponse = PaginatedResponse<Ad>;
