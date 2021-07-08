import { EntityRepository, Repository } from "typeorm"
import { User } from "../entities/User"

@EntityRepository(User)
class usersRepos extends Repository<User> {

}

export { usersRepos }