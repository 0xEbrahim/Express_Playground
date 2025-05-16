import "reflect-metadata";
import { MetadataKeys } from "../Enums/Metadata.Keys";
import { RequestHandler } from "express";

export function Use(middleware: RequestHandler) {
  return (proto: any, key: string, desc: PropertyDecorator) => {
    const middlewares =
      Reflect.getMetadata(MetadataKeys.Middleware, proto, key) || [];
    middlewares.push(middleware);
    Reflect.defineMetadata(MetadataKeys.Middleware, middlewares, proto, key);
  };
}
