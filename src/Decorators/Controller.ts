import "reflect-metadata";
import { MetadataKeys } from "../Enums/Metadata.Keys";

export function Controller(prefix: string) {
  return (constructor: Function) => {
    const prototype = constructor.prototype;
    const methodNames = Object.getOwnPropertyNames(prototype).filter(
      (name) => typeof prototype[name] === "function" && name !== "constructor"
    );
    for (let key of methodNames) {
      const method = Reflect.getMetadata(MetadataKeys.Method, prototype, key);
      const route = Reflect.getMetadata(MetadataKeys.Route, prototype, key);
      const middleware =
        Reflect.getMetadata(MetadataKeys.Middleware, prototype, key) || [];
    }
  };
}
