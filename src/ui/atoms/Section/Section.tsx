import clsx from "clsx";
import React from "react";
import styles from "./Section.module.scss";

interface SectionProps {
  bgColor?: "primary" | "secondary" | "light" | "none";
  first?: boolean;
  last?: boolean;
  children: React.ReactNode;
}
export default function Section({
  bgColor = "none",
  first = false,
  last = false,
  children,
}: SectionProps) {
  const classes = clsx(styles.wrap, styles[bgColor], {
    [styles.first]: first,
    [styles.last]: last,
  });

  return <section className={classes}>{children}</section>;
}
