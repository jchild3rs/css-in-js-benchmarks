import { Suspense } from "react";
import getSlot from "../lib/get-slot";

const Page = getSlot("page");

export default function Web() {
  return (
    <div>
      <Suspense>
        <Page />
      </Suspense>
    </div>
  );
}
