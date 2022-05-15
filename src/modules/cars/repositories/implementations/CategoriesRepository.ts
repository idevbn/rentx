import { Category } from "@modules/cars/entities/Category";
import { getRepository, Repository } from "typeorm";

import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.repository = getRepository(Category);
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  public async create({
    name,
    description,
  }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category);
  }

  public async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  public async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({
      where: {
        name,
      },
    });
    return category;
  }
}

export { CategoriesRepository };
