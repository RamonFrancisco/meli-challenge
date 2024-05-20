import { Router } from "express";
import { ItemController } from "../controllers/item.controller";
import { ItemService } from "../services/item/item.service";
import { Meli } from "../modules/integration/meli/Meli";
import { meliApi } from "../modules/integration/meli/api";
import { ItemAdapter } from "../services/item/adapters/item.adapter";

const makeItemController = (): ItemController => {
  const meli = new Meli(meliApi);
  const itemAdapter = new ItemAdapter();
  const itemService = new ItemService(meli, itemAdapter);
  return new ItemController(itemService);
};

export default (router: Router): void => {
  router.get(
    "/items",
    async (req, res) => await makeItemController().searchItem(req, res)
  );
  router.get(
    "/items/:id",
    async (req, res) => await makeItemController().getItem(req, res)
  );
};
