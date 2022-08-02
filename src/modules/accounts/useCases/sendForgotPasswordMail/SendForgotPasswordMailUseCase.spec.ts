import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory";

import { DayJsDateProvider } from "@shared/container/providers/DateProvider/Implementations/DayJsDateProvider";
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppError";

import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let dateProvider: DayJsDateProvider;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let mailProvider: MailProviderInMemory;

describe("Send Forgot Mail", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    dateProvider = new DayJsDateProvider();
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
    mailProvider = new MailProviderInMemory();

    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      usersRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dateProvider,
      mailProvider
    );
  });

  it("Should be able to send a forgot password mail to an user", async () => {
    const sendMail = jest.spyOn(mailProvider, "sendMail");

    await usersRepositoryInMemory.create({
      driver_license: "218086",
      email: "itisoj@numioki.lr",
      name: "Dominic Collins",
      password: "1234",
    });

    await sendForgotPasswordMailUseCase.execute("itisoj@numioki.lr");

    expect(sendMail).toHaveBeenCalled();
  });

  it("Should not be able to an email if user does not exists", async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute("vukvom@otuneb.gs")
    ).rejects.toEqual(new AppError("User does not exists!"));
  });

  it("Should be able to create an users tokens", async () => {
    const generateTokenMail = jest.spyOn(
      usersTokensRepositoryInMemory,
      "create"
    );

    await usersRepositoryInMemory.create({
      driver_license: "449440",
      email: "balwabetu@ga.om",
      name: "Barry Drake",
      password: "1234",
    });

    await sendForgotPasswordMailUseCase.execute("balwabetu@ga.om");

    expect(generateTokenMail).toBeCalled();
  });
});
