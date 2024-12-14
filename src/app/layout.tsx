//app/layout.tsx
import './globals.css';
import { DesignProvider } from '@/app/context/DesignContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ua">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
      </head>
      <DesignProvider>
        <body>{children}</body>
      </DesignProvider>
    </html>
  );
}
