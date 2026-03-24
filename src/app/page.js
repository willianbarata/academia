import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Beneficios from '@/components/Beneficios';
import ComoFunciona from '@/components/ComoFunciona';
import Resultados from '@/components/Resultados';
import Planos from '@/components/Planos';
import Estrutura from '@/components/Estrutura';
import Depoimentos from '@/components/Depoimentos';
import CtaForte from '@/components/CtaForte';
import Localizacao from '@/components/Localizacao';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <Beneficios />
        <ComoFunciona />
        <Resultados />
        <Planos />
        <Estrutura />
        <Depoimentos />
        <CtaForte />
        <Localizacao />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
