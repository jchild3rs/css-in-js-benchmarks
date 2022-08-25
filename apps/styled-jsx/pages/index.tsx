import { lazy, Suspense } from "react";

const Page = lazy(() => import('../components/page'))

export default function Web() {
  return (
    <div className="root">
      <Suspense>
        <Page />
      </Suspense>
    </div>
  );
}
