'use client';

import { useEffect, useState, type ReactNode } from 'react';
import Image from 'next/image';
import styles from './IntroExperience.module.css';

const sessionKey = 'mansa-solar-intro-seen';
const introDuration = 3500;

export default function IntroExperience({ children }: { children: ReactNode }) {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let shouldPlay = true;
    try {
      shouldPlay = window.sessionStorage.getItem(sessionKey) !== 'true';
      if (shouldPlay) window.sessionStorage.setItem(sessionKey, 'true');
    } catch (error) {
      console.error('Unable to read or write the MANSA intro session flag.', error);
    }

    if (!shouldPlay) return;

    setShowIntro(true);
    const timeout = window.setTimeout(() => setShowIntro(false), introDuration);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className={`${styles.siteContent} ${showIntro ? styles.revealing : ''}`}>
        {children}
      </div>
      {showIntro && (
        <div className={styles.introScreen} aria-hidden="true">
          <div className={styles.introContent}>
            <Image
              src="/images/Solar_Leaf_M_Logo.jpg"
              alt=""
              width={160}
              height={160}
              priority
              className={styles.logo}
            />
            <div className={styles.companyName}>
              <span className={styles.mansa}>MANSA</span>
              <span className={styles.solarEnergy}>SOLAR ENERGY</span>
            </div>
            <div className={styles.experience}>
              <span className={styles.accent} />
              <p><b>10+</b> Years of Experience</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
