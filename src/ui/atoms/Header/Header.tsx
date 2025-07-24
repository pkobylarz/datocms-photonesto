import React from 'react';
import clsx from 'clsx';
import styles from './Header.module.scss';

interface HeaderProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 's' | 'm' | 'l';
  weight?: '300' | '500' | '700';
  center?: boolean;
  noMargin?: boolean;
  children: React.ReactNode;
}

export default function Header({
  as = 'h2',
  size = 'm',
  weight = '700',
  center = false,
  noMargin = false,
  children,
}: HeaderProps) {
  const classes = clsx(styles.wrap, styles[size], styles[`weight${weight}`], {
    [styles.center]: center,
    [styles.noMargin]: noMargin,
  });

  return {
    h1: <h1 className={classes}>{children}</h1>,
    h2: <h2 className={classes}>{children}</h2>,
    h3: <h3 className={classes}>{children}</h3>,
    h4: <h4 className={classes}>{children}</h4>,
    h5: <h5 className={classes}>{children}</h5>,
    h6: <h6 className={classes}>{children}</h6>,
  }[as];
}
