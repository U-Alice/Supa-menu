import { Request, Response } from "express";
import { OrderService } from "../services/order";

const orderService = new OrderService();

export class OrderController {
  async getAll(req: Request, res: Response) {
    const orders = await orderService.getAllOrders();
    res.json(orders);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const order = await orderService.getOrderById(id);
    res.json(order);
  }

  async create(req: Request, res: Response) {
    const data = req.body;
    const newOrder = await orderService.createOrder(data);
    res.json(newOrder);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    const updatedOrder = await orderService.updateOrder(id, data);
    res.json(updatedOrder);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await orderService.deleteOrder(id);
    res.sendStatus(204);
  }
}
