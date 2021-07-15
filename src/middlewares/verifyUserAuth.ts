import { Response, Request, NextFunction, response } from "express";

import { verify } from "jsonwebtoken"

interface IPayLoad {
  sub: string
}

export function verifyUserAuth(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if (!authToken) return res.status(401).end();

  const [, token] = authToken.split("");

  try {
    const { sub } = verify(token, "25dd9b7ad13d7ffc271e84de09112b84") as IPayLoad;

    req.user_id = sub;

    return next();
  } catch (err) {
    return res.status(401).end();
  }
}