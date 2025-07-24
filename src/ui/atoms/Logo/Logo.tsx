import clsx from 'clsx';
import React from 'react';

import LinkLocal from '@/ui/atoms/LinkLocal/LinkLocal';

import { PhotonestoLogoFull } from '@/assets/logo/photonesto-full';
import styles from './Logo.module.scss';

interface LogoProps {
  size?: 'topbar' | 'footer';
}

const Logo: React.FC<LogoProps> = ({ size = 'topbar' }) => {
  return (
    <LinkLocal href="/" className={clsx(styles.wrap, styles[size])}>
      {size === 'topbar' ? <PhotonestoLogoFull /> : <PhotonestoLogoFull />}
    </LinkLocal>
  );
};

export default Logo;
