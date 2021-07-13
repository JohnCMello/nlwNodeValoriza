import { EntityRepository, Repository } from "typeorm"
import { Compliment } from "../entities/Compliment"

@EntityRepository(Compliment)
class ComplimentsRepos extends Repository<Compliment> { }

export { ComplimentsRepos }