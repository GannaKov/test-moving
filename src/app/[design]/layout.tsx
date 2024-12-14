//app/[...design]/layout.tsx
import type { Metadata } from 'next';
import { DesignProvider } from '@/app/context/DesignContext';

import ButtonChangeDesigne from '@/components/ui/ButtonChangeDesigne';
// import InitializeDesign from '@/components/ui/InitializeDesign';
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';

export const metadata: Metadata = {
  title: 'Все, що рухається',
  description: 'Everything that moves',
};

// designUtils.ts
// export const getServerDesignType = (designParams: string[]): string => {
//   if (designParams.includes('designByOlga')) return 'designByOlga';
//   if (designParams.includes('designBySvitlana')) return 'designBySvitlana';
//   return 'initial';
// };
interface LayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: LayoutProps) {
  //When not it not it ????

  return (
    <>
      <Header />
          <main>{children}</main>
          <Footer/>
      <ButtonChangeDesigne />

    </>
  );
}
