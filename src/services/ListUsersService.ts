import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm"
import { UsersRepos } from "../repos/UsersRepos"

class ListUsersService {
  async execute() {
    const userRepos = getCustomRepository(UsersRepos);
    const users = await userRepos.find()
    return classToPlain(users)
  }
}

export { ListUsersService }
