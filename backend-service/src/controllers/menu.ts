import { Request, Response } from "express";
import { MenuService } from "../services/menu";

const menuService = new MenuService();

export class MenuController {
  async getAll(req: Request, res: Response) {
    const menus = await menuService.getAllMenus();
    res.json(menus);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const menu = await menuService.getMenuById(id);
    res.json(menu);
  }

  async create(req: Request, res: Response) {
    const data = req.body;
    const newMenu = await menuService.createMenu(data);
    res.json(newMenu);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    const updatedMenu = await menuService.updateMenu(id, data);
    res.json(updatedMenu);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await menuService.deleteMenu(id);
    res.sendStatus(204);
  }
}
