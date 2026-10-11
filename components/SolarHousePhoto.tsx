'use client';

import { useState } from 'react';
import Image from 'next/image';

const alt = 'Modern Indian house with rooftop solar panels installed by a solar energy provider';

export default function SolarHousePhoto() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="calculator-visual">
      {!imageFailed ? (
        <Image
          src="/images/indian-rooftop-solar-homes.jpg"
          alt={alt}
          fill
          sizes="(max-width: 620px) 100vw, 50vw"
          priority={false}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 72%', transform: 'scale(1.6)', transformOrigin: 'center bottom' }}
          onError={() => {
            console.error('Unable to load the Indian rooftop solar photograph.');
            setImageFailed(true);
          }}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'grid',
            placeItems: 'center',
            padding: 24,
            color: '#123b65',
            textAlign: 'center',
          }}
        >
          Rooftop solar photo temporarily unavailable.
        </div>
      )}
      <div className="visual-panel">
        <span>ESTIMATOR</span>
        <b>01</b>
        <small>Start with your monthly bill</small>
        <div className="visual-line"><i /></div>
      </div>
    </div>
  );
}
