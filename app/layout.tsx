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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
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
    type: "website",
    locale: "tr_TR",
    url: "https://yeninesilakademi.com.tr",
    siteName: "Yeni Nesil Akademi",
    title: "Yeni Nesil Akademi | İzmit Lise ve Üniversite Hazırlık Kursu",
    description:
      "İzmit'te LGS, TYT, AYT, YKS hazırlık kursları, akademik koçluk ve bireysel çalışma programları.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Yeni Nesil Akademi",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yeni Nesil Akademi | İzmit Üniversite Hazırlık Kursu',
    description:
      'Yeni Nesil Akademi ile hedeflediğin üniversiteye güvenle hazırlan.',
    images: ['/og-image.webp'],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Yeni Nesil Akademi",
              url: "https://yeninesilakademi.com.tr",
              logo: "https://yeninesilakademi.com.tr/logo_yeninesilakademi.webp",
              image: "https://yeninesilakademi.com.tr/og-image.webp",
              telephone: [
                "+90 553 430 11 98",
                "+90 531 724 46 41",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Ömerağa Mahallesi Latif Bey Sokak No:9 Kat:3",
                addressLocality: "İzmit",
                addressRegion: "Kocaeli",
                postalCode: "41040",
                addressCountry: "TR",
              },
              sameAs: [
                "https://instagram.com/yeninesilakademi.izmit",
                "https://www.facebook.com/profile.php?id=61588884123585",
              ],
            }),
          }}
        />
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
