import { Suspense,lazy } from "react";
import styles from "./page.module.css";

const Button = lazy(() => import('../components/button'))

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
