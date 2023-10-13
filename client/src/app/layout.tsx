import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthContextProvider } from '@/context/auth-context';
import { useContext } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Note Nest',
  description:
    'Your Personal Space for Notes and Ideas. Unleash your creativity, stay organized, and collaborate seamlessly with NoteNest. Elevate your productivity and creativity today.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('container max-w-6xl mx-auto px-2', inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <AuthContextProvider>
            <Navbar />
            {children}
          </AuthContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
