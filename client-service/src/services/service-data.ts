import { ImodelOrders } from "../types/interface-model-orders";
import modelOrderPrisma from "../models/model-orders";

class DataService {
  private readonly db: ImodelOrders
  constructor() {
    this.db = modelOrderPrisma
  }
  async getPaginatedOrders(page: number, rowsPerPage: number) {
    return this.db.getPaginated(page, rowsPerPage);
  }
}

export default new DataService();
