import { getCustomRepository } from "typeorm"
import { ComplimentsRepos } from "../repos/ComplimentsRepos";


class ListComplimentsReceivedByUserService {
  async execute(user_id: string) {
    const complimentsRepos = getCustomRepository(ComplimentsRepos);
    const complimentsReceived = await complimentsRepos.find({
      where: {
        user_receiver: user_id
      },
      relations: [
        "userSender",
        "userReceiver",
        "tag"
      ]
    })
    return complimentsReceived
  }
}

export { ListComplimentsReceivedByUserService }