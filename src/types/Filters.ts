export interface Filters {
  search: string;
  status: string[]; // multiple select
  category: string;
  minPrice: number | null;
  maxPrice: number | null;

  sort:
    | "date_desc"
    | "date_asc"
    | "price_desc"
    | "price_asc"
    | "priority";

  page: number;
}
