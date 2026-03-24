'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

const TOTAL_FRAMES = 79;
const IMAGE_PREFIX = '/img/Man_fitness_transformation_video_b07248b68b_';

export default function Hero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const currentFrameRef = useRef(0);
  const rafRef = useRef(null);

  // Preload all images
  useEffect(() => {
    const loadedImages = [];
    let loaded = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const padded = String(i).padStart(3, '0');
      img.src = `${IMAGE_PREFIX}${padded}.jpg`;
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Draw frame on canvas
  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;
    const ctx = canvas.getContext('2d');
    const img = images[frameIndex];
    if (!img || !img.complete) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Cover-fit the image
    const scale = Math.max(
      canvas.width / img.naturalWidth,
      canvas.height / img.naturalHeight
    );
    const x = (canvas.width - img.naturalWidth * scale) / 2;
    const y = (canvas.height - img.naturalHeight * scale) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);
  };

  // Scroll-driven animation
  useEffect(() => {
    if (!isLoaded) return;

    // Draw first frame immediately
    drawFrame(0);

    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const scrollableHeight = container.offsetHeight - window.innerHeight;
        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
        const frameIndex = Math.min(
          TOTAL_FRAMES - 1,
          Math.floor(progress * TOTAL_FRAMES)
        );

        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => drawFrame(currentFrameRef.current));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', () => drawFrame(currentFrameRef.current));
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isLoaded, images]);

  const loadingPercent = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  return (
    <section ref={containerRef} className={styles.heroContainer}>
      <div className={styles.stickyWrapper}>
        {/* Loading Screen */}
        {!isLoaded && (
          <div className={styles.loader}>
            <div className={styles.loaderContent}>
              <div className={styles.loaderLogo}>IRON HOUSE</div>
              <div className={styles.loaderBarBg}>
                <div
                  className={styles.loaderBar}
                  style={{ width: `${loadingPercent}%` }}
                />
              </div>
              <div className={styles.loaderPercent}>{loadingPercent}%</div>
            </div>
          </div>
        )}

        {/* Canvas */}
        <canvas ref={canvasRef} className={styles.canvas} />

        {/* Dark Gradient Overlay */}
        <div className={styles.overlay} />

        {/* Content */}
        <div className={`${styles.content} ${isLoaded ? styles.contentVisible : ''}`}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            São José do Rio Preto
          </div>
          <h1 className={styles.headline}>
            Transforme seu corpo.
            <br />
            <span className={styles.headlineAccent}>Mude sua vida.</span>
          </h1>
          <p className={styles.subheadline}>
            Treinamento de alto nível em São José do Rio Preto
          </p>
          <p className={styles.supporting}>
            Resultados reais com acompanhamento profissional
          </p>
          <a href="https://wa.me/5517999999999" className={styles.cta}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Agendar avaliação gratuita
          </a>
          <div className={styles.scrollIndicator}>
            <div className={styles.scrollMouse}>
              <div className={styles.scrollWheel} />
            </div>
            <span>Scroll para descobrir</span>
          </div>
        </div>
      </div>
    </section>
  );
}
