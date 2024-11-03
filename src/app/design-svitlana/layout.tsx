import React from 'react';

import { inter } from '@/components/ui/fonts';
import Header from '@/components/layout/svitlana/header/header';
import Footer from '@/components/layout/svitlana/footer/footer';

//import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: {
//     template: '%s | Acme Dashboard',
//     default: 'Acme Dashboard',
//   },
//   description: 'The official Next.js Learn Dashboard built with App Router.',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="bg-blue-500">
      <Header />
      <main className="flex justify-center">{children}</main>

      <Footer />
    </body>
  );
}
