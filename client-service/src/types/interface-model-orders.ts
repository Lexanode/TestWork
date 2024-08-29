import type { OrdersTaxi } from "@prisma/client";


export type OrderData = Omit<OrdersTaxi, "id" | "create_date">;

export interface ImodelOrders {
    create(data: OrderData): Promise<OrdersTaxi>;
    update(id: string, data: OrderData): Promise<OrdersTaxi>;
    getOne(id: string): Promise<OrdersTaxi | null>;
    getAll(): Promise<OrdersTaxi[] | null>;
    getPaginated(page: number, rowsPerPage: number): Promise<OrdersTaxi[] | null>;
}