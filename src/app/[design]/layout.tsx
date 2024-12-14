//app/[design]/layout.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ButtonChangeDesigne from '@/components/ui/ButtonChangeDesigne';
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';

export const metadata: Metadata = {
  title: 'Все, що рухається',
  description: 'Everything that moves',
};
const ALLOWED_DESIGNS = ['designByOlga', 'designBySvitlana'];

interface LayoutProps {
  children: React.ReactNode;
  params: { design: string };
}

// we can use it
// {
//   design === 'designByOlga' && <header>Header for Olga</header>;
// }
// {
//   design === 'designBySvitlana' && <header>Header for Svitlana</header>;
// }

export default function RootLayout({ children, params }: LayoutProps) {
  //When not this and  not this

  const design = params.design;
  if (!ALLOWED_DESIGNS.includes(design)) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ButtonChangeDesigne />
    </>
  );
}
