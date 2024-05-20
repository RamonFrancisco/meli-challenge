import { AxiosInstance } from "axios";

export class Meli {
  api: AxiosInstance;
  endPointSearchItems: string;
  endPointGetItem: string;
  endPointDescriptionItem: string;
  endPointCategory: string;

  constructor(api: AxiosInstance) {
    this.api = api;
    this.endPointSearchItems = "/sites/MLB/search";
    this.endPointGetItem = "/items";
    this.endPointDescriptionItem = "/description";
    this.endPointCategory = "/categories";
  }

  async searchItems(query: string, offset: number, limit: number) {
    return await this.api.get(
      `${this.endPointSearchItems}?q=${query}&offset=${offset}&limit=${limit}`
    );
  }

  async getItem(id: string) {
    return await this.api.get(`${this.endPointGetItem}/${id}`);
  }

  async getDescriptionItem(id: string) {
    return await this.api.get(
      `${this.endPointGetItem}/${id}/${this.endPointDescriptionItem}`
    );
  }

  async getCategories(categoryId: string) {
    return await this.api(`${this.endPointCategory}/${categoryId}`);
  }
}
