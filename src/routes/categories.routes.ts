import { CategoriesRepository } from "@modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "@modules/cars/services/CreateCategoryService";
import { Request, Response, Router } from "express";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();
// const categoriesRepository = new PostgresCategoriesRepository();
// também funciona

categoriesRoutes.post("/", (request: Request, response: Response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request: Request, response: Response) => {
  const categoriesList = categoriesRepository.list();

  return response.json(categoriesList);
});

export { categoriesRoutes };
