import React from "react";
import clsx from "clsx";
import styles from "./Paragraph.module.scss";

interface ParagraphProps {
  size?: "s" | "m" | "l";
  center?: boolean;
  relative?: boolean;
  noMargin?: boolean;
  children: React.ReactNode;
}

export default function Paragraph({
  size = "m",
  center = false,
  relative = false,
  noMargin = false,
  children,
}: ParagraphProps) {
  const classes = clsx(styles.wrap, styles[size], {
    [styles.center]: center,
    [styles.relative]: relative,
    [styles.noMargin]: noMargin,
  });

  return <p className={classes}>{children}</p>;
}
