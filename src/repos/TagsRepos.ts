import { EntityRepository, Repository } from "typeorm"
import { Tag } from "../entities/Tag"

@EntityRepository(Tag)
class TagsRepos extends Repository<Tag> { }

export { TagsRepos }