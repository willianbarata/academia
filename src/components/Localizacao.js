'use client';

import { useEffect, useRef } from 'react';
import styles from './Localizacao.module.css';

export default function Localizacao() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="localizacao" className={styles.section} ref={sectionRef}>
      <div className="animate-on-scroll">
        <h2 className="section-title">Estamos em São José do Rio Preto</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Fácil acesso, localização privilegiada no coração da cidade.
        </p>
      </div>

      <div className={`animate-on-scroll delay-2 ${styles.wrapper}`}>
        <div className={styles.mapContainer}>
          <div className={styles.mapPlaceholder}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Mapa Interativo</span>
            <span className={styles.mapSubtext}>São José do Rio Preto - SP</span>
          </div>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <h4 className={styles.infoTitle}>Endereço</h4>
              <p className={styles.infoText}>Av. Bady Bassitt, 1234<br />São José do Rio Preto - SP</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <div>
              <h4 className={styles.infoTitle}>Horário</h4>
              <p className={styles.infoText}>Seg a Sex: 6h - 22h<br />Sáb: 8h - 14h</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <div>
              <h4 className={styles.infoTitle}>Contato</h4>
              <p className={styles.infoText}>(17) 99999-9999<br />contato@ironhouse.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
