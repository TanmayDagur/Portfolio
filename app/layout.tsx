import type {Metadata} from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css'; 

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Portfolio | Tanmay Dagur',
  description: 'Professional portfolio showcasing my projects and skills.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="font-sans bg-zinc-50 text-zinc-900 antialiased selection:bg-zinc-900 selection:text-zinc-50" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
