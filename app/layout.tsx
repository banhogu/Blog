import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { themeEffect } from '@/utils/themeEffect';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '호진방 블로그',
  description: 'hojinbang.com', //todo 변경해라
  openGraph: {
    title: '호진방 블로그',
    description: 'hojinbang.com', //todo 변경해라
    url: 'https://hojinbang.com', //todo 변경해라
    siteName: '호진방 블로그',
  },
  metadataBase: new URL('https://hojinbang.com'), //todo 변경해라
};

export const viewport = {
  themeColor: 'transparent',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    //  하이드레이션 오류 안나오게
    <html lang="ko" className={`${inter.className} antialiased`} suppressHydrationWarning={true}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();`,
          }}
        />
      </head>
      <body className="dark:text-gray-100 max-w-2xl m-auto">
        <main className="p-6 pt-3 md:pt-6 h-[880px]">
          <Header />
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
