import { CreateCarController } from "@modules/cars/useCases/createCars/CreateCarController";
import { ListAvailableCarsController } from "@modules/cars/useCases/listAvailableCars/ListAvailableCarsController";
import { Router } from "express";

import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();

carsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);

carsRoutes.get("/available", listAvailableCarsController.handle);

export { carsRoutes };
