export interface IItemService {
  findById: (id: string) => Promise<ItemData>;
  search: (query: string, offset: number, limit: number) => Promise<ItemsData>;
}

export interface ItemData {
  categories: string[];
  item: Item;
}

export interface ItemsData {
  categories: string[];
  items: Item[];
  query: string;
  paging: Paging;
}

export interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

export interface Item {
  id: string;
  title: string;
  price: Price;
  picture_url: string;
  condition: string;
  free_shipping: boolean;
  description?: string;
  sold_qty?: number;
}

export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}
