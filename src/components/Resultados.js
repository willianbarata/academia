'use client';

import { useEffect, useRef } from 'react';
import styles from './Resultados.module.css';

const transformations = [
  {
    name: 'Lucas Martins',
    result: 'Perdi 12kg em 4 meses',
    description: 'Seguiu o plano à risca e conquistou o corpo que sempre sonhou. Mais energia, mais confiança.',
    statBefore: '92kg',
    statAfter: '80kg',
    duration: '4 meses',
  },
  {
    name: 'Ana Carolina',
    result: 'Ganhei 6kg de massa muscular',
    description: 'Começou sem experiência e hoje compete em campeonatos. Resultados impressionantes com dedicação.',
    statBefore: '52kg',
    statAfter: '58kg',
    duration: '6 meses',
  },
  {
    name: 'Pedro Henrique',
    result: 'Reduzi 15% de gordura corporal',
    description: 'Mudou completamente seu estilo de vida. Hoje tem mais disposição e saúde do que nunca.',
    statBefore: '32%',
    statAfter: '17%',
    duration: '5 meses',
  },
];

export default function Resultados() {
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
    <section id="resultados" className={styles.section} ref={sectionRef}>
      <div className="animate-on-scroll">
        <h2 className="section-title">Transformações reais</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Histórias reais de alunos que mudaram de vida na Iron House.
        </p>
      </div>

      <div className={styles.grid}>
        {transformations.map((t, index) => (
          <div
            key={index}
            className={`animate-on-scroll delay-${index + 1} ${styles.card}`}
          >
            <div className={styles.cardTop}>
              <div className={styles.statsRow}>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>Antes</span>
                  <span className={styles.statValue}>{t.statBefore}</span>
                </div>
                <div className={styles.arrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>Depois</span>
                  <span className={`${styles.statValue} ${styles.statValueAfter}`}>{t.statAfter}</span>
                </div>
              </div>
              <div className={styles.duration}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {t.duration}
              </div>
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.result}>"{t.result}"</h3>
              <p className={styles.description}>{t.description}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {t.name.charAt(0)}
                </div>
                <span className={styles.name}>{t.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
