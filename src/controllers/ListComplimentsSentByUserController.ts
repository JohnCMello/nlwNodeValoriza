import { Request, Response } from "express";
import { ListComplimentsSentByUserService } from "../services/ListComplimentsSentByUserService";

class ListComplimentsSentByUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;

    const listComplimentsSentByUserService = new ListComplimentsSentByUserService();

    const compliments = await listComplimentsSentByUserService.execute(user_id)
    return res.json(compliments)
  }
}

export { ListComplimentsSentByUserController }