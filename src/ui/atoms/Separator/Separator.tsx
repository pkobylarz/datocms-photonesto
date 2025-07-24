import React from "react";
import clsx from "clsx";
import styles from "./Separator.module.scss";

interface SeparatorProps {
  size: "12" | "24" | "32" | "40" | "60";
  mobileSize?: "12" | "24" | "32" | "40" | "60";
}
export default function Separator({ size = "12", mobileSize }: SeparatorProps) {
  const classes = clsx(
    styles.wrap,
    styles[`mobile-${mobileSize ? mobileSize : size}`],
    styles[`desktop-${size}`]
  );

  return <div className={classes} />;
}
