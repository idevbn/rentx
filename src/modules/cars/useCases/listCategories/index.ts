import { CategoriesRepository } from "@modules/cars/repositories/implementations/CategoriesRepository";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { ListCategoryController } from "./ListCategoryController";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoryController = new ListCategoryController(
  listCategoriesUseCase
);

export { listCategoryController };
