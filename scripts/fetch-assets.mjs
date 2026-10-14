import fs from "node:fs";
import path from "node:path";

const root = path.resolve("public");
const cssDir = path.join(root, "css");
const mediaDir = path.join(root, "media");
fs.mkdirSync(cssDir, { recursive: true });
fs.mkdirSync(mediaDir, { recursive: true });

const cssFiles = [
  ["https://skema.co/wp-content/themes/theme_skema/style.css", "style.css"],
  ["https://skema.co/wp-content/themes/theme_skema/css/bootstrap.min.css", "bootstrap.min.css"],
  ["https://skema.co/wp-content/themes/theme_skema/css/bootstrap-icons.css", "bootstrap-icons.css"],
  ["https://skema.co/wp-content/themes/theme_skema/css/responsive.css", "responsive.css"],
  ["https://skema.co/wp-content/themes/theme_skema/css/slick.css", "slick.css"],
  ["https://skema.co/wp-content/themes/theme_skema/css/home/skema-home-hero.css", "skema-home-hero.css"],
  ["https://skema.co/wp-content/themes/theme_skema/css/home/skema-home-proyectos.css", "skema-home-proyectos.css"],
];

const images = [
  "https://skema.co/wp-content/uploads/2025/07/LOGO-SKEMA-WEB.png",
  "https://skema.co/wp-content/uploads/2024/04/cropped-logo-skema.png",
  "https://skema.co/wp-content/uploads/2024/04/FAVICON.png",
  "https://skema.co/wp-content/uploads/2024/05/foto-unidad-1.jpg",
  "https://skema.co/wp-content/uploads/2024/05/mama-shelter.png-copia.png",
  "https://skema.co/wp-content/uploads/2026/04/V-362-APTO_4-1024x614.jpg",
  "https://skema.co/wp-content/uploads/2026/04/Logo-Tambora.png",
  "https://skema.co/wp-content/uploads/2024/05/Aureal.jpg",
  "https://skema.co/wp-content/uploads/2025/07/Gran-Aureal.png-copia.png",
  "https://skema.co/wp-content/uploads/2025/07/Diseno-sin-titulo-11.jpg",
  "https://skema.co/wp-content/uploads/2025/07/Tribeca.png-copia.png",
  "https://skema.co/wp-content/uploads/2025/07/Desktop-Astoria.jpg",
  "https://skema.co/wp-content/uploads/2025/07/astoria.png-copia.png",
  "https://skema.co/wp-content/uploads/2024/04/mapa-comercial.png",
  "https://skema.co/wp-content/uploads/2024/04/Mapa-institucional.png",
  "https://skema.co/wp-content/uploads/2024/04/Mapa-residencial_3.png",
  "https://skema.co/wp-content/uploads/2024/04/mapa-inversiones.png",
  "https://skema.co/wp-content/uploads/2025/06/icon-construido.svg",
  "https://skema.co/wp-content/uploads/2025/06/icon-proyectos.svg",
  "https://skema.co/wp-content/uploads/2025/06/icon-mercados.svg",
  "https://skema.co/wp-content/uploads/2025/07/Banner-Contacto-Desktop.png",
  "https://skema.co/wp-content/themes/theme_skema/img/fondo-textura.png",
  "https://skema.co/wp-content/themes/theme_skema/img/fondo-proyectos.png",
  "https://skema.co/wp-content/themes/theme_skema/img/fondo-mapas.png",
  "https://skema.co/wp-content/uploads/2026/10/Banners.webp",
  "https://i.ytimg.com/vi/a8xWIKicuYQ/maxresdefault.jpg",
  "https://i.ytimg.com/vi/Sitv6YLw1jA/maxresdefault.jpg",
  "https://i.ytimg.com/vi/5RymU49ocyY/maxresdefault.jpg",
  "https://i.ytimg.com/vi/cGK6sYd5nSA/maxresdefault.jpg",
  "https://i.ytimg.com/vi/3SiyXYEdeX8/maxresdefault.jpg",
];

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  console.log("ok", path.basename(dest), buf.length);
}

for (const [url, name] of cssFiles) {
  await download(url, path.join(cssDir, name));
}

const iconCss = fs.readFileSync(path.join(cssDir, "bootstrap-icons.css"), "utf8");
const fontUrls = [...iconCss.matchAll(/url\(([^)]+)\)/g)].map((m) => m[1].replace(/['"]/g, ""));
const fontsDir = path.join(cssDir, "fonts");
fs.mkdirSync(fontsDir, { recursive: true });
for (const rel of [...new Set(fontUrls)]) {
  if (!rel.includes("font")) continue;
  const abs = new URL(rel, "https://skema.co/wp-content/themes/theme_skema/css/bootstrap-icons.css");
  const name = path.basename(abs.pathname);
  await download(abs.href, path.join(fontsDir, name));
}

for (const url of images) {
  const name = decodeURIComponent(path.basename(new URL(url).pathname));
  await download(url, path.join(mediaDir, name));
}

const style = fs.readFileSync(path.join(cssDir, "style.css"), "utf8");
const locals = [...style.matchAll(/url\((['"]?)([^)'"]+)\1\)/g)].map((m) => m[2]);
console.log("style urls", [...new Set(locals)].slice(0, 40));
