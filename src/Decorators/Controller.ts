import "reflect-metadata";
import { AppRouter } from "../Config/App.Router";
import { Methods } from "../Enums/Request.methods";
import { MetadataKeys } from "../Enums/Metadata.keys";

export function Controller(prefix: string) {
  return (constructor: Function) => {
    const router = AppRouter.getInstance;
    const prototype = constructor.prototype;
    const keys = Object.getOwnPropertyNames(prototype).filter(
      (e) => e !== "constructor"
    );
    for (const key of keys) {
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
      const middlewares =
        Reflect.getMetadata(MetadataKeys.Middleware, prototype, key) || [];
      const guards =
        Reflect.getMetadata(MetadataKeys.Guard, prototype, key) || [];
      router[method](prefix + route, ...guards, ...middlewares, prototype[key]);
    }
  };
}
