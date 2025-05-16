import "reflect-metadata";
import { MetadataKeys } from "../Enums/Metadata.keys";
import { RequestHandler } from "express";

export function Use(middleware: RequestHandler) {
  return (target: any, key: string, desc: PropertyDescriptor) => {
    const middlewares =
      Reflect.getMetadata(MetadataKeys.Middleware, target, key) || [];
    middlewares.push(middleware);
    Reflect.defineMetadata(MetadataKeys.Middleware, middlewares, target, key);
  };
}
