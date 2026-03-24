'use client';

import { useEffect, useRef } from 'react';
import styles from './Planos.module.css';

const plans = [
  {
    name: 'Básico',
    price: '89',
    period: '/mês',
    features: [
      { text: 'Acesso à musculação', included: true },
      { text: 'Horário livre', included: true },
      { text: 'Vestiário e armários', included: true },
      { text: 'Avaliação física mensal', included: false },
      { text: 'Personal trainer', included: false },
      { text: 'Aulas coletivas', included: false },
    ],
    featured: false,
  },
  {
    name: 'Premium',
    price: '179',
    period: '/mês',
    badge: 'Mais Popular',
    features: [
      { text: 'Acesso à musculação', included: true },
      { text: 'Horário livre', included: true },
      { text: 'Vestiário e armários', included: true },
      { text: 'Avaliação física mensal', included: true },
      { text: 'Personal trainer', included: true },
      { text: 'Aulas coletivas', included: true },
    ],
    featured: true,
  },
  {
    name: 'Intermediário',
    price: '129',
    period: '/mês',
    features: [
      { text: 'Acesso à musculação', included: true },
      { text: 'Horário livre', included: true },
      { text: 'Vestiário e armários', included: true },
      { text: 'Avaliação física mensal', included: true },
      { text: 'Personal trainer', included: false },
      { text: 'Aulas coletivas', included: true },
    ],
    featured: false,
  },
];

export default function Planos() {
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
    <section id="planos" className={styles.section} ref={sectionRef}>
      <div className="animate-on-scroll">
        <h2 className="section-title">Escolha seu plano</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Planos flexíveis para todos os objetivos. Comece sua transformação hoje.
        </p>
      </div>

      <div className={styles.grid}>
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`animate-on-scroll delay-${index + 1} ${styles.card} ${plan.featured ? styles.featured : ''}`}
          >
            {plan.badge && (
              <div className={styles.badge}>{plan.badge}</div>
            )}
            <h3 className={styles.planName}>{plan.name}</h3>
            <div className={styles.priceRow}>
              <span className={styles.currency}>R$</span>
              <span className={styles.price}>{plan.price}</span>
              <span className={styles.period}>{plan.period}</span>
            </div>

            <ul className={styles.features}>
              {plan.features.map((feature, i) => (
                <li key={i} className={`${styles.feature} ${feature.included ? '' : styles.featureDisabled}`}>
                  {feature.included ? (
                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg className={styles.xIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  )}
                  {feature.text}
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/5517999999999"
              className={`${styles.ctaButton} ${plan.featured ? styles.ctaFeatured : ''}`}
            >
              Começar agora
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
