import { ImodelOrders } from "../types/interface-model-orders";
import modelOrderPrisma from "../models/model-orders";
import { mockOrders } from "../temp/mock-data";

class DataService {
  private readonly db: ImodelOrders
  constructor() {
    this.db = modelOrderPrisma
  }
  async getPaginatedOrders(page: number, rowsPerPage: number) {
    return this.db.getPaginated(page, rowsPerPage);
  }
  async loadMockData() {
      await this.db.createMany(mockOrders);
  }
}

export default new DataService();
