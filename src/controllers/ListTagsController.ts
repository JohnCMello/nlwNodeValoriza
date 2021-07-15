import { Request, Response } from "express";
import { ListTagsSercive } from "../services/ListTagsService";

class ListTagsController {
  async handle(req: Request, res: Response) {
    const listTagsService = new ListTagsSercive();
    const tags = await listTagsService.execute();

    return res.json(tags);
  }
}

export { ListTagsController }