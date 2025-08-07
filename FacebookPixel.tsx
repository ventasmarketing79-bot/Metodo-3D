import { useEffect } from 'react';

declare global {
  interface Window {
    fbq: any;
  }
}

interface FacebookPixelProps {
  pixelId?: string;
}

export const FacebookPixel: React.FC<FacebookPixelProps> = ({ pixelId = 'YOUR_PIXEL_ID' }) => {
  useEffect(() => {
    // Facebook Pixel Code
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${pixelId}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    // Noscript fallback
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = `https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`;
    noscript.appendChild(img);
    document.head.appendChild(noscript);

    return () => {
      // Cleanup
      document.head.removeChild(script);
      document.head.removeChild(noscript);
    };
  }, [pixelId]);

  return null;
};

// Hook para eventos personalizados
export const useFacebookPixel = () => {
  const trackEvent = (eventName: string, parameters?: any) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, parameters);
    }
  };

  const trackCustomEvent = (eventName: string, parameters?: any) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', eventName, parameters);
    }
  };

  return { trackEvent, trackCustomEvent };
};