import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  // Equivalente a:
  //
  // private categoriesRepository: CategoriesRepository;
  // constructor(categoriesRepository: CategoriesRepository) {
  // this.categoriesRepository = categoriesRepository;
  // }
  constructor(private categoriesRepository: ICategoriesRepository) {}

  public execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists.");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
