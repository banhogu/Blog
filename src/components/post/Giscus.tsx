'use client';

import { useEffect, useRef } from 'react';
import { useCurrentTalkStore } from '@/store/useTheme.store';

export default function Giscus() {
  const { currentTheme } = useCurrentTalkStore();
  const ref = useRef<HTMLDivElement>(null);

  // https://github.com/giscus/giscus/tree/main/styles/themes
  const theme = currentTheme === 'dark' ? 'dark' : 'light';

  console.log(theme);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://giscus.app/client.js';
    scriptElem.async = true;
    scriptElem.crossOrigin = 'anonymous';

    scriptElem.setAttribute('data-repo', 'banghogu/Blog');
    scriptElem.setAttribute('data-repo-id', 'R_kgDOMNeu0A');
    scriptElem.setAttribute('data-category', 'Comments');
    scriptElem.setAttribute('data-category-id', 'DIC_kwDOMNeu0M4CgZU9');
    scriptElem.setAttribute('data-mapping', 'pathname');
    scriptElem.setAttribute('data-strict', '0');
    scriptElem.setAttribute('data-reactions-enabled', '1');
    scriptElem.setAttribute('data-emit-metadata', '0');
    scriptElem.setAttribute('data-input-position', 'bottom');
    scriptElem.setAttribute('data-theme', theme);
    scriptElem.setAttribute('data-lang', 'ko');

    ref.current.appendChild(scriptElem);
  }, [currentTheme]);

  // https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#isetconfigmessage
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
    iframe?.contentWindow?.postMessage({ giscus: { setConfig: { theme } } }, 'https://giscus.app');
  }, [currentTheme]);

  return <section ref={ref} />;
}
