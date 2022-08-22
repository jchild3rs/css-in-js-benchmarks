import { ComponentType, lazy } from "react";

export default function getSlot<T>(componentFileName: string) {
  return lazy<ComponentType<T>>(
    () => import(`../components/${componentFileName}.tsx`)
  );
}
