import { SitioAssets } from "@/components/sitio/SitioAssets";

export default function SitioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="stylesheet" href="/theme/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/theme/css/bootstrap-icons.css" />
      <link rel="stylesheet" href="/theme/style.css" />
      <link rel="stylesheet" href="/theme/css/responsive.css" />
      <link rel="stylesheet" href="/theme/css/slick.css" />
      <link rel="stylesheet" href="/theme/css/home/skema-home-hero.css" />
      <link rel="stylesheet" href="/theme/css/home/skema-home-proyectos.css" />
      <link rel="stylesheet" href="/theme/css/clone.css" />
      <SitioAssets />
      {children}
    </>
  );
}
