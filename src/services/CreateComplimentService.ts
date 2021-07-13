import { getCustomRepository } from "typeorm"
import { ComplimentsRepos } from "../repos/ComplimentsRepos";
import { UsersRepos } from "../repos/UsersRepos";

interface IComplimentRequest {
  user_sender: string
  user_receiver: string
  tag_id: string
  message: string
}

class CreateComplimentService {

  async execute({ user_sender, user_receiver, tag_id, message }: IComplimentRequest) {
    const complimentRepos = getCustomRepository(ComplimentsRepos);
    const usersRepos = getCustomRepository(UsersRepos);

    if (user_sender === user_receiver) throw new Error("Don't be so Narcissist")

    const userReceiver = await usersRepos.findOne(user_receiver)

    if (!userReceiver) throw new Error("There's no one to send a compliment to.")

    const compliment = complimentRepos.create({
      user_sender,
      user_receiver,
      tag_id,
      message
    })

    await complimentRepos.save(compliment)

    return compliment
  }
}

export { CreateComplimentService }