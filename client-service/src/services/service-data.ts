import modelOrders from "../models/model-orders";

class DataService {
  async getPaginatedOrders(page: number, rowsPerPage: number) {
    return modelOrders.getPaginated(page, rowsPerPage);
  }
}

export default new DataService();
