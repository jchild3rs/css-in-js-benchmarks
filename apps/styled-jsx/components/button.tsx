import { DetailsHTMLAttributes } from "react";

export default function Button(
  props: DetailsHTMLAttributes<HTMLButtonElement>
) {
  return (
    <>
      <button {...props} className={"button"} />

      <style jsx>{`
        .button {
          color: blue;
          margin: 10px;
        }
      `}</style>
    </>
  );
}
