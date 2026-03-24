'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Estrutura.module.css';

const facilityItems = [
  { title: 'Sala de Musculação', description: 'Equipamentos de última geração' },
  { title: 'Área Funcional', description: 'Espaço amplo para treinos dinâmicos' },
  { title: 'Estúdio de Spinning', description: 'Bikes premium e ambiente imersivo' },
  { title: 'Sala de Avaliação', description: 'Tecnologia para acompanhamento preciso' },
  { title: 'Área de Alongamento', description: 'Espaço dedicado para recuperação' },
  { title: 'Recepção Moderna', description: 'Ambiente acolhedor e profissional' },
];

// Colors for placeholder thumbnails
const colors = ['#1a2a3a', '#2a1a3a', '#1a3a2a', '#3a2a1a', '#1a1a3a', '#2a3a1a'];

export default function Estrutura() {
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
    <section id="estrutura" className={styles.section} ref={sectionRef}>
      <div className="animate-on-scroll">
        <h2 className="section-title">Nossa estrutura</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Ambiente moderno, equipamentos de ponta e espaços planejados para otimizar seu treino.
        </p>
      </div>

      <div className={styles.grid}>
        {facilityItems.map((item, index) => (
          <div
            key={index}
            className={`animate-on-scroll delay-${index + 1} ${styles.card} ${index === 0 ? styles.cardLarge : ''}`}
          >
            <div
              className={styles.imageHolder}
              style={{ background: `linear-gradient(135deg, ${colors[index]}, #0a0a0a)` }}
            >
              <div className={styles.imageIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
            </div>
            <div className={styles.cardOverlay}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
