import clsx from "clsx";
import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "light" | "none";
  noMinWidth?: boolean;
  mobileLabel?: React.ReactNode | string;
  children: React.ReactNode;
}

export default function Button({
  color = "none",
  noMinWidth = false,
  mobileLabel = null,
  children,
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.wrap, styles[color], {
        [styles.noMinWidth]: noMinWidth,
      })}
    >
      {mobileLabel && <span className={styles.mobileLabel}>{mobileLabel}</span>}
      {mobileLabel ? (
        <span className={styles.desktopLabel}>{children}</span>
      ) : (
        children
      )}
    </button>
  );
}
