import {Prisma, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export class MenuItemService {
  async getAllMenuItems() {
    return prisma.menuItem.findMany();
  }

  async getMenuItemById(id: string) {
    return prisma.menuItem.findUnique({ where: { id } });
  }

  async createMenuItem(data: any) {
    return prisma.menuItem.create({ data });
  }

  async updateMenuItem(id: string, data: any) {
    return prisma.menuItem.update({ where: { id }, data });
  }

  async deleteMenuItem(id: string) {
    return prisma.menuItem.delete({ where: { id } });
  }
}
