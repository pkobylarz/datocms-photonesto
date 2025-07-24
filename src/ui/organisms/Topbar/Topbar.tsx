'use client';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

import Button from '@/ui/atoms/Button/Button';
import Container from '@/ui/atoms/Container/Container';
import Logo from '@/ui/atoms/Logo';

import styles from './Topbar.module.scss';

const Topbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [scrollOnTop, setScrollOnTop] = useState<boolean>(true);

  const toggleMenu = () => {
    let distanceFromTop = window.pageYOffset;

    return function () {
      const newDistanceFromTop = window.pageYOffset;
      if (newDistanceFromTop < 20 || distanceFromTop >= newDistanceFromTop) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
      if (newDistanceFromTop < 1) {
        setScrollOnTop(true);
      } else {
        setScrollOnTop(false);
      }
      distanceFromTop = newDistanceFromTop;
    };
  };

  useEffect(() => {
    setTimeout(() => setShowMenu(true), 500);
    window.addEventListener('scroll', toggleMenu());
    return window.removeEventListener('scroll', toggleMenu());
  }, []);

  return (
    <div
      className={clsx(styles.wrap, {
        [styles.showMenu]: showMenu,
        [styles.scrollOnTop]: scrollOnTop,
      })}
    >
      <Container>
        <div className={`${styles.content}`}>
          <Logo size="topbar" />
          <aside>
            <a href="https://app.photonesto.com/" rel="noopener noreferrer" title="Photonesto">
              <Button color="primary" mobileLabel="Log in">
                Załóź Darmowe Konto
              </Button>
            </a>
          </aside>
        </div>
      </Container>
    </div>
  );
};

export default Topbar;
