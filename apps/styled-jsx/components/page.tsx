import { lazy, Suspense } from "react";

const Button = lazy(() => import(`.` + "/button"));

export default function Page() {
  return (
    <div className="page">
      <h1>Web</h1>
      <Suspense>
        <Button className="button">Boop</Button>
      </Suspense>
      <style jsx>{`
        .page {
        }
        .page :global(.button) {
          color: red;
        }
      `}</style>
    </div>
  );
}
