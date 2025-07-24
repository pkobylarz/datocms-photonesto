import React from 'react';
import clsx from 'clsx';
import styles from './Grid.module.scss';

interface GridProps {
  columns?: '1' | '2' | '3' | '4';
  gap?: '12' | '24' | '48';
  children: React.ReactNode;
}
export default function Grid({ columns = '1', gap = '24', children }: GridProps) {
  const classes = clsx(styles.wrap, styles[`col-${columns}`], styles[`gap-${gap}`]);

  return <div className={classes}>{children}</div>;
}
