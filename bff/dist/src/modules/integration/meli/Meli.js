"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meli = void 0;
class Meli {
    constructor(api) {
        this.api = api;
        this.endPointSearchItems = "/sites/MLB/search";
        this.endPointGetItem = "/items";
        this.endPointDescriptionItem = "/description";
        this.endPointCategory = "/categories";
    }
    async searchItems(query, offset, limit) {
        return await this.api.get(`${this.endPointSearchItems}?q=${query}&offset=${offset}&limit=${limit}`);
    }
    async getItem(id) {
        return await this.api.get(`${this.endPointGetItem}/${id}`);
    }
    async getDescriptionItem(id) {
        return await this.api.get(`${this.endPointGetItem}/${id}/${this.endPointDescriptionItem}`);
    }
    async getCategories(categoryId) {
        return await this.api(`${this.endPointCategory}/${categoryId}`);
    }
}
exports.Meli = Meli;
