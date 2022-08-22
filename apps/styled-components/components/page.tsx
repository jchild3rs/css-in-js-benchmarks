import { Suspense } from "react";
import styled from "styled-components";
import getSlot from "../lib/get-slot";
import type { ButtonProps } from "./button";

const Button = getSlot<ButtonProps>("button");

const PageRoot = styled.div`
  .button {
    color: red;
  }
`;

export default function Page() {
  return (
    <PageRoot>
      <h1>Web</h1>
      <Suspense>
        <Button className="button">Boop</Button>
      </Suspense>
    </PageRoot>
  );
}
