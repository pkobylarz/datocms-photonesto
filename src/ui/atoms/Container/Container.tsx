import React from 'react';
import clsx from 'clsx';
import styles from './Container.module.scss';

interface ContainerProps {
  narrow?: boolean;
  children: React.ReactNode;
}
export default function Container({ narrow = false, children }: ContainerProps) {
  const classes = clsx(styles.wrap, { [styles.narrow]: narrow });

  return <div className={classes}>{children}</div>;
}
