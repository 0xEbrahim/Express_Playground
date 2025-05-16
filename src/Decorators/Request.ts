import { MetadataKeys } from "../Enums/Metadata.Keys";
import { Methods } from "../Enums/Request.methods";

function Request(method: Methods) {
  return function (path: string) {
    return (proto: any, key: string, desc: PropertyDecorator) => {
      Reflect.defineMetadata(MetadataKeys.Method, method, proto, key);
      Reflect.defineMetadata(MetadataKeys.Route, path, proto, key);
    };
  };
}

export const Get = Request(Methods.Get);
export const Post = Request(Methods.Post);
export const Delete = Request(Methods.Delete);
export const Put = Request(Methods.Put);
export const Patch = Request(Methods.Patch);
