import { IItemService, ItemData, ItemsData } from "./protocols/item.protocol";
import {
  ItemAdapter,
  MeliItemDetails,
  MeliSearchItem,
} from "./adapters/item.adapter";
import { Meli } from "../../modules/integration/meli/Meli";

export class ItemService implements IItemService {
  constructor(readonly meli: Meli, readonly itemAdapter: ItemAdapter) {}

  async findById(id: string): Promise<ItemData> {
    const resultDescriptionItem = await this.meli.getDescriptionItem(id);
    const description = resultDescriptionItem.data.plain_text ?? "";

    const resultItem = await this.meli.getItem(id);
    if (resultItem) {
      let categories: string[] = [];
      const item = this.itemAdapter.adaptItem({
        ...resultItem.data,
        description,
      } as MeliItemDetails);
      const resultCategory = await this.meli.getCategories(
        resultItem.data.category_id
      );
      if (resultCategory && resultCategory.data.path_from_root.length) {
        const meliCategories = resultCategory.data.path_from_root as Array<{
          id: string;
          name: string;
        }>;
        categories = meliCategories.map((category) => category.name);
      }

      return {
        item,
        categories,
      };
    } else {
      throw new Error("Internal server error");
    }
  }

  async search(
    query: string,
    offset: number,
    limit: number
  ): Promise<ItemsData> {
    const result = await this.meli.searchItems(query, offset, limit);
    if (result) {
      let categories: string[] = [];
      const items = result.data.results.map((meliItem: MeliSearchItem) =>
        this.itemAdapter.adaptSearchItem(meliItem)
      );
      let meliCategories = result.data.filters.find(
        (filter: { id: string }) => filter.id === "category"
      );
      meliCategories =
        meliCategories &&
        meliCategories.values.length &&
        meliCategories.values[0].path_from_root.length
          ? meliCategories.values[0].path_from_root
          : [];
      categories = meliCategories.map(
        (category: { id: string; name: string }) => category.name
      );

      return {
        items,
        categories,
        query: result.data.query,
        paging: result.data.paging,
      };
    } else {
      throw new Error("Internal server error");
    }
  }
}
