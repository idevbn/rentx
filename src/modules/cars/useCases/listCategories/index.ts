import { CategoriesRepository } from "@modules/cars/repositories/CategoriesRepository";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { ListCategoryController } from "./ListCategoryController";

const categoriesRepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoryController = new ListCategoryController(
  listCategoriesUseCase
);

export { listCategoryController };
