"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemController = void 0;
class ItemController {
    constructor(itemService) {
        this.itemService = itemService;
    }
    async getItem(req, res) {
        try {
            const { id } = req.params;
            const item = await this.itemService.findById(id);
            return res.status(200).json(item);
        }
        catch (err) {
            return res.status(500).json({ message: "Internal server error" });
        }
    }
    async searchItem(req, res) {
        try {
            const { search, offset, limit } = req.query;
            const offsetParam = !offset || isNaN(Number(offset)) ? 0 : Number(offset);
            const limitParam = !limit || isNaN(Number(limit)) ? 10 : Number(limit);
            const item = await this.itemService.search(search, offsetParam, limitParam);
            return res.status(200).json(item);
        }
        catch (err) {
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}
exports.ItemController = ItemController;
