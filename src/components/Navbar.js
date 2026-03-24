'use client';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          IRON HOUSE<span className={styles.logoAccent}> FITNESS</span>
        </a>
        <button className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
        <ul className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
          <li><a href="#beneficios" onClick={() => setMenuOpen(false)}>Benefícios</a></li>
          <li><a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como Funciona</a></li>
          <li><a href="#resultados" onClick={() => setMenuOpen(false)}>Resultados</a></li>
          <li><a href="#planos" onClick={() => setMenuOpen(false)}>Planos</a></li>
          <li><a href="#estrutura" onClick={() => setMenuOpen(false)}>Estrutura</a></li>
          <li><a href="https://wa.me/5517999999999" className={styles.ctaLink}>Agendar</a></li>
        </ul>
      </div>
    </nav>
  );
}
