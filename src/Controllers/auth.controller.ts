import { NextFunction, Request, Response } from "express";
import { Controller, Delete, Get, Patch, Post, Put, Use, UseGuard } from "../Decorators";
import Logger from "../middlewares/Logger";
import RoleGuard from "../Guards/Role.Guard";

@Controller("/login")
class Auth {
  @Get("/")
  @Use(Logger)
  @UseGuard(RoleGuard)
  TryGetRequest(req: Request, res: Response, next: NextFunction) {
    res.send("Get Done");
  }

  @Post("/")
  @Use(Logger)
  TryPostRequest(req: Request, res: Response, next: NextFunction) {
    res.send("Post Done");
  }

  @Delete("/")
  @Use(Logger)
  TryDeleteRequest(req: Request, res: Response, next: NextFunction) {
    res.send("Delet Done");
  }

  @Patch("/")
  @Use(Logger)
  TryPatchRequest(req: Request, res: Response, next: NextFunction) {
    res.send("Patch Done");
  }

  @Put("/")
  @Use(Logger)
  TryPutRequest(req: Request, res: Response, next: NextFunction) {
    res.send("Put Done");
  }
}
