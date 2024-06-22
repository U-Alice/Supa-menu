import { Request, Response } from "express";
import { MenuItemService } from "../services/menuItem";

const menuItemService = new MenuItemService();

export class MenuItemController {
  async getAll(req: Request, res: Response) {
    const menuItems = await menuItemService.getAllMenuItems();
    res.json(menuItems);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const menuItem = await menuItemService.getMenuItemById(id);
    res.json(menuItem);
  }

  async create(req: Request, res: Response) {
    const data = req.body;
    const newMenuItem = await menuItemService.createMenuItem(data);
    res.json(newMenuItem);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    const updatedMenuItem = await menuItemService.updateMenuItem(id, data);
    res.json(updatedMenuItem);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await menuItemService.deleteMenuItem(id);
    res.sendStatus(204);
  }
}
