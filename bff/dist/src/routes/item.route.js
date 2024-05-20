"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const item_controller_1 = require("../controllers/item.controller");
const item_service_1 = require("../services/item/item.service");
const Meli_1 = require("../modules/integration/meli/Meli");
const api_1 = require("../modules/integration/meli/api");
const item_adapter_1 = require("../services/item/adapters/item.adapter");
const makeItemController = () => {
    const meli = new Meli_1.Meli(api_1.meliApi);
    const itemAdapter = new item_adapter_1.ItemAdapter();
    const itemService = new item_service_1.ItemService(meli, itemAdapter);
    return new item_controller_1.ItemController(itemService);
};
exports.default = (router) => {
    router.get('/items', async (req, res) => await makeItemController().searchItem(req, res));
    router.get('/items/:id', async (req, res) => await makeItemController().getItem(req, res));
};
