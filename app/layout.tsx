import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rania Khan',
  description: 'Portfolio of Rania Khan',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
