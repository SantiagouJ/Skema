import type { Metadata } from "next";
import "./globals.css";

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
          href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@160..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
