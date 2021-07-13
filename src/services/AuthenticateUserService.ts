import { getCustomRepository } from "typeorm";
import { UsersRepos } from "../repos/UsersRepos";

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";


interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepos = getCustomRepository(UsersRepos);

    const user = await usersRepos.findOne({ email });

    if (!user) throw new Error("Email or password incorrect");

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new Error("Email or password incorrect");

    const token = sign(
      {
        email: user.email
      },
      "25dd9b7ad13d7ffc271e84de09112b84",
      {
        subject: user.id,
        expiresIn: "1d"
      }
    );
    return token;
  }
}

export { AuthenticateUserService }