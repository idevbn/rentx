import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoryController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  public handle(request: Request, response: Response): Response {
    const categories = this.listCategoriesUseCase.execute();

    return response.json(categories);
  }
}

export { ListCategoryController };
