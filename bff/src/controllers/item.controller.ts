import { Request, Response } from "express";
import { IItemService } from "../services/item/protocols/item.protocol";

export class ItemController {
  constructor(private readonly itemService: IItemService) {}

  async getItem(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const item = await this.itemService.findById(id);
      return res.status(200).json(item);
    } catch (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  async searchItem(req: Request, res: Response): Promise<any> {
    try {
      const { search, offset, limit } = req.query;

      const offsetParam = !offset || isNaN(Number(offset)) ? 0 : Number(offset);
      const limitParam = !limit || isNaN(Number(limit)) ? 10 : Number(limit);

      const item = await this.itemService.search(
        search as string,
        offsetParam,
        limitParam
      );
      return res.status(200).json(item);
    } catch (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
