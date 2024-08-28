import { Router } from "express";

import controllerData from "../controllers/controller-data";

const router = Router();

router.get("/data", controllerData.getData);

export default router;
