"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemService = void 0;
class ItemService {
    constructor(meli, itemAdapter) {
        this.meli = meli;
        this.itemAdapter = itemAdapter;
    }
    async findById(id) {
        var _a;
        const resultDescriptionItem = await this.meli.getDescriptionItem(id);
        const description = (_a = resultDescriptionItem.data.plain_text) !== null && _a !== void 0 ? _a : "";
        const resultItem = await this.meli.getItem(id);
        if (resultItem) {
            let categories = [];
            const item = this.itemAdapter.adaptItem({
                ...resultItem.data,
                description,
            });
            const resultCategory = await this.meli.getCategories(resultItem.data.category_id);
            if (resultCategory && resultCategory.data.path_from_root.length) {
                const meliCategories = resultCategory.data.path_from_root;
                categories = meliCategories.map((category) => category.name);
            }
            return {
                item,
                categories,
            };
        }
        else {
            throw new Error("Internal server error");
        }
    }
    async search(query, offset, limit) {
        const result = await this.meli.searchItems(query, offset, limit);
        if (result) {
            let categories = [];
            const items = result.data.results.map((meliItem) => this.itemAdapter.adaptSearchItem(meliItem));
            let meliCategories = result.data.filters.find((filter) => filter.id === "category");
            meliCategories =
                meliCategories &&
                    meliCategories.values.length &&
                    meliCategories.values[0].path_from_root.length
                    ? meliCategories.values[0].path_from_root
                    : [];
            categories = meliCategories.map((category) => category.name);
            return {
                items,
                categories,
                query: result.data.query,
                paging: result.data.paging,
            };
        }
        else {
            throw new Error("Internal server error");
        }
    }
}
exports.ItemService = ItemService;
