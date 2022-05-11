import { CategoriesRepository } from "@modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "@modules/cars/useCases/createCategory";
import { Router } from "express";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (request, response) => {
  const categoriesList = categoriesRepository.list();

  return response.json(categoriesList);
});

export { categoriesRoutes };
