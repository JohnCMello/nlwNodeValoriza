import { getCustomRepository } from "typeorm"
import { ComplimentsRepos } from "../repos/ComplimentsRepos";


class ListComplimentsSentByUserService {
  async execute(user_id: string) {
    const complimentsRepos = getCustomRepository(ComplimentsRepos);
    const complimentsSent = await complimentsRepos.find({
      where: {
        user_sender: user_id
      },
      relations: [
        "userSender",
        "userReceiver",
        "tag"
      ]
    })
    return complimentsSent
  }
}

export { ListComplimentsSentByUserService }