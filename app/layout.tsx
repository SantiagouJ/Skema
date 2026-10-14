import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Skema Promotora – Líderes en construcción",
  description: "Líderes en construcción",
  icons: { icon: "/media/FAVICON.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Readex+Pro:wght@160..700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/theme/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/theme/css/bootstrap-icons.css" />
        <link rel="stylesheet" href="/theme/style.css" />
        <link rel="stylesheet" href="/theme/css/responsive.css" />
        <link rel="stylesheet" href="/theme/css/slick.css" />
        <link rel="stylesheet" href="/theme/css/home/skema-home-hero.css" />
        <link rel="stylesheet" href="/theme/css/home/skema-home-proyectos.css" />
        <link rel="stylesheet" href="/theme/css/clone.css" />
      </head>
      <body className="home wp-singular page-template page-template-theme_inicio page-template-theme_inicio-php page page-id-2 wp-custom-logo wp-theme-theme_skema no-sidebar">
        {children}
        <Script src="/theme/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/theme/js/slick.min.js" strategy="afterInteractive" />
        <Script src="/theme/js/home-init.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
