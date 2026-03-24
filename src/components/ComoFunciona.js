'use client';

import { useEffect, useRef } from 'react';
import styles from './ComoFunciona.module.css';

const steps = [
  {
    number: '01',
    title: 'Avaliação Física Completa',
    description: 'Análise detalhada do seu corpo, composição corporal e capacidade física para traçar o melhor caminho.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Plano de Treino Personalizado',
    description: 'Montamos um programa exclusivo alinhado aos seus objetivos, tempo disponível e preferências.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Acompanhamento Semanal',
    description: 'Monitoramento constante da sua evolução com ajustes inteligentes no treino e orientações de performance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Evolução e Resultados',
    description: 'Veja seu corpo se transformar com resultados reais, mensuráveis e consistentes mês a mês.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9l6 6 6-6" />
        <path d="M12 3v12" />
        <path d="M5 21h14" />
      </svg>
    ),
  },
];

export default function ComoFunciona() {
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
    <section id="como-funciona" className={styles.section} ref={sectionRef}>
      <div className="animate-on-scroll">
        <h2 className="section-title">Sua jornada começa aqui</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Um processo simples e eficiente para você alcançar seus objetivos.
        </p>
      </div>

      <div className={styles.timeline}>
        <div className={styles.timelineLine} />
        {steps.map((step, index) => (
          <div
            key={index}
            className={`animate-on-scroll delay-${index + 1} ${styles.step} ${index % 2 === 1 ? styles.stepRight : ''}`}
          >
            <div className={styles.stepNumber}>
              <span>{step.number}</span>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
