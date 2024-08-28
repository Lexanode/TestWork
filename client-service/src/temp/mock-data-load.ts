import { mockOrders } from "./mock-data";
import modelOrders from "../models/model-orders";

async () => {
  for (const order of mockOrders) {
    await modelOrders.create(order);
  }
};
