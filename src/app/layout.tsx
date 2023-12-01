import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '∞',
  description: 'An infinite canvas',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="fixed w-screen h-screen">{children}</body>
    </html>
  );
}
