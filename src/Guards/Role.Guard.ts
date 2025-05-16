import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  if (req.body.name === "Ibrahim") return next();
  throw new Error("Unauthorized");
};
