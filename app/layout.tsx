import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

const display = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yeninesilakademi.com.tr'),
  title: {
    default: 'Yeni Nesil Akademi | İzmit Lise ve Üniversite Hazırlık Kursu',
    template: '%s | Yeni Nesil Akademi',
  },
  description:
    'Yeni Nesil Akademi ile hedeflediğin liseye ve üniversiteye güvenle hazırlan. Uzman eğitmenler, bireysel çalışma planları, Türkiye geneli deneme sınavları ve akademik koçluk sistemi.',
  keywords: [
    'üniversite hazırlık',
    'lise hazırlık',
    'YKS kursu',
    'TYT AYT kursu',
    'LGS hazırlık',
    'İzmit dershanesi',
    'Yeni Nesil Akademi',
    'akademik koçluk',
  ],
  authors: [{ name: 'Yeni Nesil Akademi' }],
  creator: 'Yeni Nesil Akademi',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    title: 'Yeni Nesil Akademi | İzmit Lise ve Üniversite Hazırlık Kursu',
    description:
      'Yeni Nesil Akademi ile hedeflediğin liseye ve üniversiteye güvenle hazırlan. Uzman eğitmenler, bireysel çalışma planları ve akademik koçluk sistemi.',
    siteName: 'Yeni Nesil Akademi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yeni Nesil Akademi | İzmit Üniversite Hazırlık Kursu',
    description:
      'Yeni Nesil Akademi ile hedeflediğin üniversiteye güvenle hazırlan.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.variable} ${display.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
