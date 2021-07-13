import { getCustomRepository } from "typeorm";
import { TagsRepos } from "../repos/TagsRepos";

class CreateTagService {

  async execute(name: string) {
    const tagsRepos = getCustomRepository(TagsRepos);

    if (!name) throw new Error("Name not provided. Please, provide a tag name.");

    const tagAlreadyExists = await tagsRepos.findOne({ name });

    if (tagAlreadyExists) throw new Error("There is already a tag registered under this name");

    const tag = tagsRepos.create({ name });

    await tagsRepos.save(tag);

    return tag;
  }
}

export { CreateTagService }