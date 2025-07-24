'use client';

import { AnimatePresence, motion, useMotionTemplate } from 'framer-motion';
import { ReactNode, createContext, useContext } from 'react';
import useProgress from '@/hooks/useProgress';

import styles from './ProgressBar.module.scss';

export const ProgressBarContext = createContext<ReturnType<typeof useProgress> | null>(null);

export function useProgressBar() {
  const progress = useContext(ProgressBarContext);

  if (progress === null) {
    throw new Error('Can only be used within <ProgressBar>');
  }

  return progress;
}

export function ProgressBar({ children }: { children: ReactNode }) {
  const progress = useProgress();
  const width = useMotionTemplate`${progress.value}%`;

  return (
    <ProgressBarContext.Provider value={progress}>
      <AnimatePresence onExitComplete={progress.reset}>
        {progress.state !== 'complete' && (
          <motion.div style={{ width }} exit={{ opacity: 0 }} className={styles.wrap} />
        )}
      </AnimatePresence>

      {children}
    </ProgressBarContext.Provider>
  );
}
