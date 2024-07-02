import '@/styles/globals.css';
import { themeEffect } from '@/utils/themeEffect';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import GoogleAnalytics from './GoogleAnalytics';
import { Suspense } from 'react';

export const metadata = {
  title: '호진방 블로그',
  description: 'banghojin.site',
  openGraph: {
    title: '호진방 블로그',
    description: '안녕하세요, 방호진의 기술 블로그입니다.',
    url: 'https://banghojin.site',
    siteName: '호진방 블로그',
    images: {
      url: './OG_IMAG.png',
    },
  },
  metadataBase: new URL('https://banghojin.site'),
};

export const viewport = {
  themeColor: 'transparent',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    //  하이드레이션 오류 안나오게
    <html lang="ko" suppressHydrationWarning={true}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();`,
          }}
        />
      </head>
      <body className="dark:text-gray-100 max-w-2xl m-auto">
        <main className="p-4 pt-3 md:pt-6 min-h-screen">
          <Header />
          <GoogleAnalytics />
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
