import type { Metadata } from 'next';
import { Audiowide } from 'next/font/google';
import './globals.css';
import { FavoritesProvider } from '@/context/FavoritesContext';
import FavoritesBar from '@/components/favorites-bar';

const audiowide = Audiowide({
  variable: '--font-audiowide',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Find Your New Best Friend',
  description: 'Browse through a list of pets available for adoption.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${audiowide.variable} antialiased`}>
        <FavoritesProvider>
          {children}
          <FavoritesBar />
        </FavoritesProvider>
      </body>
    </html>
  );
}
