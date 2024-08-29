import { PrismaClient, type OrdersTaxi, StatusRide } from "@prisma/client";
import { ImodelOrders, OrderData } from "../types/interface-model-orders";
const prisma = new PrismaClient();



class ModelOrdersTaxi implements ImodelOrders {
  async create(data: OrderData): Promise<OrdersTaxi> {
    return prisma.ordersTaxi.create({
      data: {
        ...data,
      },
    });
  }
  async update(id: string, data: OrderData): Promise<OrdersTaxi> {
    return prisma.ordersTaxi.update({
      where: {
        id: id,
      },
      data: {
        ...data,
      },
    });
  }
  async setNewstatus(id: string, status: StatusRide) {
    const updatedAccount = await prisma.ordersTaxi.update({
      where: {
        id: id,
      },
      data: {
        status: status,
      },
    });

    console.log("Updated profile:", updatedAccount);
    return updatedAccount;
  }
  async getOne(id: string) {
    return prisma.ordersTaxi.findUnique({
      where: { id: id },
    });
  }
  async getAll() {
    return prisma.ordersTaxi.findMany();
  }
  async getPaginated(page: number, rowsPerPage: number) {
    const offset = (page - 1) * rowsPerPage;

    return prisma.ordersTaxi.findMany({
      skip: offset,
      take: rowsPerPage,
      orderBy: {
        create_date: "desc", //newest record first
      },
    });
  }
}

export default new ModelOrdersTaxi();
