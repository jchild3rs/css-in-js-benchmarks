import styles from "./button.module.css";
import { DetailsHTMLAttributes } from "react";
import clsx from "clsx";

export type ButtonProps = DetailsHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  return <button {...props} className={clsx(styles.button, props.className)} />;
}
