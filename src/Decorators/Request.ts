import { RequestHandler } from "express";
import { MetadataKeys } from "../Enums/Metadata.keys";
import { Methods } from "../Enums/Request.methods";

interface requestHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function Request(method: Methods) {
  return function To(route: string) {
    return (target: any, key: string, desc: requestHandlerDescriptor) => {
      Reflect.defineMetadata(MetadataKeys.Method, method, target, key);
      Reflect.defineMetadata(MetadataKeys.Route, route, target, key);
    };
  };
}

export const Get = Request(Methods.Get);
export const Post = Request(Methods.Post);
export const Delete = Request(Methods.Delete);
export const Put = Request(Methods.Put);
export const Patch = Request(Methods.Patch);
