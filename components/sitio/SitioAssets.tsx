"use client";

import { useEffect } from "react";
import Script from "next/script";

const BODY_CLASS =
  "home wp-singular page-template page-template-theme_inicio page-template-theme_inicio-php page page-id-2 wp-custom-logo wp-theme-theme_skema no-sidebar";

export function SitioAssets() {
  useEffect(() => {
    const previous = document.body.className;
    document.body.className = BODY_CLASS;
    return () => {
      document.body.className = previous;
    };
  }, []);

  return (
    <>
      <Script src="/theme/js/jquery.min.js" strategy="afterInteractive" />
      <Script src="/theme/js/slick.min.js" strategy="afterInteractive" />
      <Script src="/theme/js/home-init.js" strategy="afterInteractive" />
    </>
  );
}
