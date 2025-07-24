'use client';
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

import styles from './QuoteCard.module.scss';
import { useIntersectionObserver } from 'usehooks-ts';
import clsx from 'clsx';

interface QuoteCardProps {
  quote: string;
  avatar: StaticImageData | null;
  name: string;
  title: string;
  link: string;
  delay?: '0' | '1' | '2';
}

export default function QuoteCard({
  quote = '',
  avatar = null,
  name = '',
  title = '',
  link = '',
  delay = '0',
}: QuoteCardProps) {
  const [isActive, setIsActive] = useState(false);
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isIntersecting === true) {
      setIsActive(true);
    }
  }, [isIntersecting]);

  return (
    <blockquote
      className={clsx(styles.wrap, styles[`delay${delay}`], {
        [styles.active]: isActive,
      })}
      ref={ref}
    >
      <p className={styles.quote}>{quote}</p>
      <a className={styles.author} href={link} target="_blank" title={name}>
        <div>
          <p>
            <strong>{name}</strong>
            <span>{title}</span>
          </p>
        </div>
        {avatar && <Image src={avatar} alt={name} width="48" height="48" unoptimized />}
      </a>
    </blockquote>
  );
}
