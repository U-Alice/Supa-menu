import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class PaymentService {
  async getAllPayments() {
    return prisma.payment.findMany();
  }

  async getPaymentById(id: string) {
    return prisma.payment.findUnique({ where: { id } });
  }

  async createPayment(data: any) {
    return prisma.payment.create({ data });
  }

  async updatePayment(id: string, data: any) {
    return prisma.payment.update({ where: { id }, data });
  }

  async deletePayment(id: string) {
    return prisma.payment.delete({ where: { id } });
  }
}
