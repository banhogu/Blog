'use client';

import { pageview } from '@/utils/gtag';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import React, { useEffect } from 'react';

function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
   
     gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
 `}
      </Script>
    </>
  );
}

export default GoogleAnalytics;
