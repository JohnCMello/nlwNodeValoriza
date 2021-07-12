import { getCustomRepository } from "typeorm"
import { TagsRepos } from "../repos/TagsRepos";

class CreateTagService {

  async execute(name: string) {
    const tagsRepository = getCustomRepository(TagsRepos);

    if (!name) {
      throw new Error("Name not provided. Please, provide a tag name.")
    }

    const tagAlreadyExists = await tagsRepository.findOne({ name });

    if (tagAlreadyExists) {
      throw new Error("There is already a tag registered under this name")
    }

    const tag = tagsRepository.create({ name })

    await tagsRepository.save(tag)

    return tag
  }
}

export { CreateTagService }