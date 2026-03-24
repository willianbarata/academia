'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Depoimentos.module.css';

const testimonials = [
  {
    quote: 'Nunca tive resultados assim antes! A equipe é muito dedicada e os treinos são incríveis.',
    name: 'Rafael Souza',
    role: 'Aluno há 8 meses',
    stars: 5,
  },
  {
    quote: 'Ambiente incrível e motivador. Cada treino é uma experiência transformadora.',
    name: 'Juliana Alves',
    role: 'Aluna há 1 ano',
    stars: 5,
  },
  {
    quote: 'Mudou minha vida completamente. Mais energia, mais confiança e resultados reais.',
    name: 'Bruno Costa',
    role: 'Aluno há 6 meses',
    stars: 5,
  },
  {
    quote: 'Melhor academia da região! Profissionais competentes e equipamentos de primeira.',
    name: 'Camila Santos',
    role: 'Aluna há 2 anos',
    stars: 5,
  },
];

export default function Depoimentos() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="depoimentos" className={styles.section} ref={sectionRef}>
      <div className="animate-on-scroll">
        <h2 className="section-title">O que nossos alunos dizem</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          A satisfação dos nossos alunos é nossa maior conquista.
        </p>
      </div>

      <div className={styles.carousel}>
        <div className={styles.carouselTrack}>
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`${styles.testimonialCard} ${index === activeIndex ? styles.active : ''}`}
            >
              <div className={styles.quoteIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 5.996 8.789 5.996 11h4v10H0z" />
                </svg>
              </div>
              <div className={styles.stars}>
                {[...Array(t.stars)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className={styles.quote}>"{t.quote}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.name.charAt(0)}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
