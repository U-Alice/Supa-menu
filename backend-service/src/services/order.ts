import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class OrderService {
  async getAllOrders() {
    return prisma.order.findMany();
  }

  async getOrderById(id: string) {
    return prisma.order.findUnique({ where: { id } });
  }

  async createOrder(data: any) {
    return prisma.order.create({ data });
  }

  async updateOrder(id: string, data: any) {
    return prisma.order.update({ where: { id }, data });
  }

  async deleteOrder(id: string) {
    return prisma.order.delete({ where: { id } });
  }
}
