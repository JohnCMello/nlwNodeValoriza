import { EntityRepository, Repository } from "typeorm"
import { User } from "../entities/User"

@EntityRepository(User)
class UsersRepos extends Repository<User> { }

export { UsersRepos }