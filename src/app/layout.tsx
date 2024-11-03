import './globals.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="en">{children}</html>;
}

// {/* <body>
//   {/* Layout UI */}
//   <main>{children}</main>
// </body>; */}
