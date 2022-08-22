import { Suspense } from "react";
import getSlot from "../lib/get-slot";

const Page = getSlot("page");

export default function Web() {
  return (
    <div className="root">
      <Suspense>
        <Page />
      </Suspense>
    </div>
  );
}
