'use client';

import { useEffect, useRef } from 'react';
import styles from './Beneficios.module.css';

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5h11M6.5 6.5V5a1 1 0 011-1h9a1 1 0 011 1v1.5M6.5 6.5L4 9.5M17.5 6.5L20 9.5M4 9.5h16M4 9.5v4a1 1 0 001 1h3.5M20 9.5v4a1 1 0 01-1 1h-3.5M8.5 14.5v4a1 1 0 001 1h5a1 1 0 001-1v-4" />
      </svg>
    ),
    title: 'Treinos Personalizados',
    description: 'Programas de treino desenvolvidos especificamente para seus objetivos e condição física.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
    title: 'Equipamentos Modernos',
    description: 'Aparelhos de última geração para otimizar cada segundo do seu treino.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <path d="M20 8v6M23 11h-6" />
      </svg>
    ),
    title: 'Acompanhamento Profissional',
    description: 'Personal trainers certificados disponíveis para guiar sua evolução.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Ambiente Motivador',
    description: 'Energia contagiante e comunidade engajada que inspira resultados.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15l-3-3h2V7h2v5h2l-3 3z" />
        <path d="M5.52 19c-1.14-.86-1.94-2.1-2.24-3.5a7 7 0 019.26-7.87" />
        <path d="M18.48 5a7 7 0 01-1.02 12.37" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    title: 'Resultados Comprovados',
    description: 'Método testado com centenas de alunos alcançando suas metas.',
  },
];

export default function Beneficios() {
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
    <section id="beneficios" className={styles.section} ref={sectionRef}>
      <div className={`animate-on-scroll ${styles.header}`}>
        <h2 className="section-title">Por que treinar na Iron House?</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Tudo o que você precisa para alcançar resultados extraordinários em um só lugar.
        </p>
      </div>

      <div className={styles.grid}>
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`animate-on-scroll delay-${index + 1} ${styles.card}`}
          >
            <div className={styles.iconWrapper}>
              {benefit.icon}
            </div>
            <h3 className={styles.cardTitle}>{benefit.title}</h3>
            <p className={styles.cardDescription}>{benefit.description}</p>
            <div className={styles.cardGlow} />
          </div>
        ))}
      </div>
    </section>
  );
}
