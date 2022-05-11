import { CategoriesRepository } from "@modules/cars/repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "@modules/cars/useCases/importCategory/ImportCategoryController";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryController };
