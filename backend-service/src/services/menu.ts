import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

export class MenuService {
  async getAllMenus() {
    return prisma.menu.findMany();
  }

  async getMenuById(id: string) {
    return prisma.menu.findUnique({ where: { id } });
  }

  async createMenu(data: any) {
    return prisma.menu.create({ data });
  }

  async updateMenu(id: string, data: any) {
    return prisma.menu.update({ where: { id }, data });
  }

  async deleteMenu(id: string) {
    return prisma.menu.delete({ where: { id } });
  }
}
