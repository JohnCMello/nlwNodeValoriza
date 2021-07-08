import { usersRepos } from "../repos/UsersRepos";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {

  async execute({ name, email, admin }: IUserRequest) {
    const usersRepository = new usersRepos();

    if (!email) {
      throw new Error("Email not provided. Please, provide an email account.")
    }

    const userAlreadyExists = await usersRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new Error("There is already a user registered on this email account")
    }

    const user = usersRepository.create({
      name,
      email,
      admin
    })

    await usersRepository.save(user)

    return user
  }
}

export { CreateUserService }