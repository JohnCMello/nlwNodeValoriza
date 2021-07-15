import { getCustomRepository } from "typeorm";
import { TagsRepos } from "../repos/TagsRepos";
import { classToPlain } from "class-transformer";

class ListTagsSercive {
  async execute() {
    const tagsRepos = getCustomRepository(TagsRepos);
    const tags = await tagsRepos.find()
    return classToPlain(tags)
  }
}

export { ListTagsSercive }
