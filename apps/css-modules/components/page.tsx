import { Suspense } from "react";
import getSlot from "../lib/get-slot";
import { ButtonProps } from "./button";
import styles from "./page.module.css";

const Button = getSlot<ButtonProps>("button");

export default function Page() {
  return (
    <div className={styles.page}>
      <h1>Web</h1>
      <Suspense>
        <Button className={styles.button}>Boop</Button>
      </Suspense>
    </div>
  );
}
