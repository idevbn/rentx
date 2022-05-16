import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  public async execute({
    driver_license,
    email,
    name,
    password,
    username,
  }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      driver_license,
      email,
      name,
      password,
      username,
    });
  }
}

export { CreateUserUseCase };
