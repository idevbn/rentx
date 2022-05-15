import { CreateCategoryController } from "@modules/cars/useCases/createCategory/CreateCategoryController";
import { importCategoryController } from "@modules/cars/useCases/importCategory";
import { listCategoryController } from "@modules/cars/useCases/listCategories";
import { Router } from "express";
import multer from "multer";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (request, response) =>
  listCategoryController.handle(request, response)
);

categoriesRoutes.post("/import", upload.single("file"), (request, response) =>
  importCategoryController.handle(request, response)
);

export { categoriesRoutes };
