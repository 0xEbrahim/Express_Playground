import { RequestHandler } from "express";
import { MetadataKeys } from "../Enums/Metadata.keys";
import { Methods } from "../Enums/Request.methods";

interface requestHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeBundler(method: Methods) {
  return function RequestTo(route: string) {
    return (target: any, key: string, desc: requestHandlerDescriptor) => {
      Reflect.defineMetadata(MetadataKeys.Method, method, target, key);
      Reflect.defineMetadata(MetadataKeys.Route, route, target, key);
    };
  };
}

export const Get = routeBundler(Methods.Get);
export const Post = routeBundler(Methods.Post);
export const Delete = routeBundler(Methods.Delete);
export const Put = routeBundler(Methods.Put);
export const Patch = routeBundler(Methods.Patch);
