export interface Order {
  id: string;
  product: {
    name: string;
    image: string;
  };
  date: string;
  time: string;
  timeSpent: string;
  orderValue: number;
  commission: number;
}

export type SortField = "date" | "timeSpent" | "orderValue" | "commission";
export type SortOrder = "asc" | "desc";
