import "reflect-metadata";
import { MetadataKeys } from "../Enums/Metadata.keys";
import { RequestHandler } from "express";

export function UseGuard(guards: RequestHandler) {
  return (proto: any, key: string, desc: PropertyDescriptor) => {
    const curGuards = Reflect.getMetadata(MetadataKeys.Guard, proto, key) || [];
    curGuards.push(guards);
    Reflect.defineMetadata(MetadataKeys.Guard, curGuards, proto, key);
  };
}
