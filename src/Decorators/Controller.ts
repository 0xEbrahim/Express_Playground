import "reflect-metadata";
import { MetadataKeys } from "../Enums/Metadata.keys";
import { AppRouter } from "../Config/App.Router";
import { Methods } from "../Enums/Request.methods";

export function Controller(prefix: string) {
  return (constructor: Function) => {
    const prototype = constructor.prototype;
    const router = AppRouter.getInstance;
    for (let key in prototype) {
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.Method,
        prototype,
        key
      );
      const route: string = Reflect.getMetadata(
        MetadataKeys.Route,
        prototype,
        key
      );
      const middleware =
        Reflect.getMetadata(MetadataKeys.Middleware, prototype, key) || [];
      router[method](prefix + route, ...middleware, prototype[key]);
    }
  };
}
