import { Request, Response } from "express";
import { PaymentService } from "../services/payment";

const paymentService = new PaymentService();

export class PaymentController {
  async getAll(req: Request, res: Response) {
    const payments = await paymentService.getAllPayments();
    res.json(payments);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const payment = await paymentService.getPaymentById(id);
    res.json(payment);
  }

  async create(req: Request, res: Response) {
    const data = req.body;
    const newPayment = await paymentService.createPayment(data);
    res.json(newPayment);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    const updatedPayment = await paymentService.updatePayment(id, data);
    res.json(updatedPayment);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await paymentService.deletePayment(id);
    res.sendStatus(204);
  }
}
