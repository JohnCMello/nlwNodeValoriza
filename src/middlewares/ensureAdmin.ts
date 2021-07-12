import { Response, Request, NextFunction, response } from "express"


export function ensureAdmin(req: Request, res: Response, next: NextFunction) {
  const admin = true;

  if (admin) return next();

  return response.status(401).json({
    error: "User doesn't have permission for that action"
  })
}