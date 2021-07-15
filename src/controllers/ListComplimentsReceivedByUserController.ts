import { Request, Response } from "express";
import { ListComplimentsReceivedByUserService } from "../services/ListComplimentsReceivedByUserService";

class ListComplimentsReceivedByUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;

    const listComplimentsReceivedByUserService = new ListComplimentsReceivedByUserService();

    const compliments = await listComplimentsReceivedByUserService.execute(user_id)
    return res.json(compliments)
  }
}

export { ListComplimentsReceivedByUserController }
