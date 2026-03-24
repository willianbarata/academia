import './globals.css';

export const metadata = {
  title: 'Iron House Fitness | Academia Premium em São José do Rio Preto',
  description: 'Transforme seu corpo na Iron House Fitness. Treinos personalizados, equipamentos modernos e acompanhamento profissional em São José do Rio Preto. Agende sua avaliação gratuita!',
  keywords: 'academia, fitness, musculação, treino personalizado, São José do Rio Preto, Iron House',
  openGraph: {
    title: 'Iron House Fitness | Sua transformação começa aqui',
    description: 'Academia premium com treinos personalizados e resultados comprovados em São José do Rio Preto.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
