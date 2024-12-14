//app/[...design]/layout.tsx
import type { Metadata } from 'next';
import { DesignProvider } from '@/app/context/DesignContext';

import ButtonChangeDesigne from '@/components/ui/ButtonChangeDesigne';
// import InitializeDesign from '@/components/ui/InitializeDesign';
import HeaderOlga from '@/components/layout/header/designByOlga/HeaderOlga';
import FooterOlga from '@/components/layout/footer/designByOlga/FooterOlga';
import HeaderSvitlana from '@/components/layout/header/designBySvitlana/HeaderSvitlana';
import FooterSvitlana from '@/components/layout/footer/designBySvitlana/FooterSvitlana';

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
      <main>{children}</main>
      <ButtonChangeDesigne />

      {/* {currentDesign === 'designByOlga' && <HeaderOlga />}
      {currentDesign === 'designBySvitlana' && <HeaderSvitlana />}
      <main>{children}</main>
      {currentDesign === 'designByOlga' && <FooterOlga />}
      {currentDesign === 'designBySvitlana' && <FooterSvitlana />} */}
    </>
  );
}
