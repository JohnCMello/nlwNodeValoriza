import { getCustomRepository } from "typeorm";
import { UsersRepos } from "../repos/UsersRepos";
import { hash } from "bcryptjs";


interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {

  async execute({ name, email, admin = false, password }: IUserRequest) {
    const usersRepos = getCustomRepository(UsersRepos);

    if (!email) throw new Error("Email not provided. Please, provide an email account.");
    if (!password) throw new Error("Password not provided. Please, provide a password.");

    const userAlreadyExists = await usersRepos.findOne({ email });

    if (userAlreadyExists) throw new Error("There is already a user registered on this email account");

    const passwordHash = await hash(password, 8);

    const user = usersRepos.create({
      name,
      email,
      admin,
      password: passwordHash
    });

    await usersRepos.save(user);

    return user;
  }
}

export { CreateUserService }