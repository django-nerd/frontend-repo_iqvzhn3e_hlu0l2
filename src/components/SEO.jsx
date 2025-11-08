import { useEffect } from 'react';

export default function SEO() {
  useEffect(() => {
    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setOG = (property, content) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    document.title = 'BLV Stitchings | Custom Tailoring, Alterations & Bridal Wear';
    setMeta('description', 'BLV Stitchings offers bespoke tailoring, precision alterations, and bridal couture in a warm, client-first studio. Book fittings and view our portfolio.');
    setMeta('keywords', 'tailor near me, custom stitching, bridal tailoring, alterations, blouse stitching, saree fall, men suit tailoring, kids tailoring, designer wear');
    setMeta('viewport', 'width=device-width, initial-scale=1');

    setOG('og:title', 'BLV Stitchings');
    setOG('og:description', 'Bespoke tailoring, alterations, and bridal couture.');
    setOG('og:type', 'website');
    setOG('og:url', window.location.origin);
  }, []);

  return null;
}
