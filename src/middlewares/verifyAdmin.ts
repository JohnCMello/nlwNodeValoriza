import { Response, Request, NextFunction } from "express"
import { getCustomRepository } from "typeorm";
import { UsersRepos } from "../repos/UsersRepos";


export async function verifyAdmin(req: Request, res: Response, next: NextFunction) {
  const { user_id } = req;

  const usersRepos = getCustomRepository(UsersRepos);
  const { admin } = await usersRepos.findOne(user_id)

  if (admin) return next();

  return res.status(401).json({
    error: "User doesn't have permission for that action"
  })
}