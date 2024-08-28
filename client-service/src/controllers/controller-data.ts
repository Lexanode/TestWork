import type { Request, Response } from "express";
import dataService from "../services/service-data";
import { paginationSchema } from "../validators/pagination.-schema";
import { ZodError } from "zod";

class ControllerData {
  async getData(req: Request, res: Response) {
    try {
      const query = await paginationSchema.parseAsync(req.query);

      const { page, count } = query;

      const paginatedOrders = await dataService.getPaginatedOrders(page, count);

      res.status(200).json({
        status: "ok",
        data: {
          orders: paginatedOrders,
          currentPage: page,
          rowsPerPage: count,
        },
      });
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        res.status(400).json({ status: "error", message: error.message });
      } else {
        res
          .status(500)
          .json({ status: "error", message: "Internal Server Error" });
      }
    }
  }
}

export default new ControllerData();
