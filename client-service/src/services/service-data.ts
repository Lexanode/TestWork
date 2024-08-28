import modelAccountInstance from "../models/model-orders"; // Import your model

class DataService {
  async getPaginatedOrders(page: number, rowsPerPage: number) {
    return modelAccountInstance.getPaginated(page, rowsPerPage);
  }
}

export default new DataService();
