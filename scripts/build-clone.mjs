import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const theme = path.join(root, "public", "theme");
const media = path.join(root, "public", "media");

function ensure(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  ensure(path.dirname(dest));
  fs.writeFileSync(dest, buf);
  console.log("ok", path.relative(root, dest), buf.length);
}

ensure(path.join(theme, "css", "home"));
ensure(path.join(theme, "css", "fonts"));
ensure(path.join(theme, "fonts"));
ensure(path.join(theme, "img"));
ensure(path.join(theme, "js"));
ensure(media);

const cssMap = [
  ["public/css/style.css", "public/theme/style.css"],
  ["public/css/bootstrap.min.css", "public/theme/css/bootstrap.min.css"],
  ["public/css/bootstrap-icons.css", "public/theme/css/bootstrap-icons.css"],
  ["public/css/responsive.css", "public/theme/css/responsive.css"],
  ["public/css/slick.css", "public/theme/css/slick.css"],
  ["public/css/skema-home-hero.css", "public/theme/css/home/skema-home-hero.css"],
  ["public/css/skema-home-proyectos.css", "public/theme/css/home/skema-home-proyectos.css"],
];
for (const [from, to] of cssMap) {
  ensure(path.dirname(path.join(root, to)));
  fs.copyFileSync(path.join(root, from), path.join(root, to));
}

for (const name of ["bootstrap-icons.woff2", "bootstrap-icons.woff"]) {
  const src = path.join(root, "public", "css", "fonts", name);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(theme, "fonts", name));
  }
}

for (const name of ["fondo-textura.png", "fondo-proyectos.png", "fondo-mapas.png"]) {
  fs.copyFileSync(path.join(media, name), path.join(theme, "img", name));
}

await download(
  "https://skema.co/wp-content/themes/theme_skema/img/flecha-select.svg",
  path.join(theme, "img", "flecha-select.svg"),
);
await download(
  "https://skema.co/wp-includes/js/jquery/jquery.min.js",
  path.join(theme, "js", "jquery.min.js"),
);
await download(
  "https://skema.co/wp-content/themes/theme_skema/js/slick.min.js",
  path.join(theme, "js", "slick.min.js"),
);

const heroes = [
  ["a8xWIKicuYQ", "hero-1.jpg"],
  ["Sitv6YLw1jA", "hero-2.jpg"],
  ["5RymU49ocyY", "hero-3.jpg"],
  ["cGK6sYd5nSA", "hero-4.jpg"],
  ["3SiyXYEdeX8", "hero-5.jpg"],
];
for (const [id, name] of heroes) {
  const max = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
  const res = await fetch(max);
  const buf = Buffer.from(await res.arrayBuffer());
  const dest = path.join(media, name);
  if (res.ok && buf.length > 20000) {
    fs.writeFileSync(dest, buf);
    console.log("ok", name, buf.length);
  } else {
    await download(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`, dest);
  }
}

const htmlPath = path.join(process.env.TEMP || "/tmp", "skema.html");
let html = fs.readFileSync(htmlPath, "utf8");
const start = html.indexOf('<div  id="page"');
const end = html.indexOf("</div><!-- #page -->");
if (start < 0 || end < 0) throw new Error("page markers not found");
html = html.slice(start, end + "</div><!-- #page -->".length);

html = html.replace(/https:\/\/skema\.co\/wp-content\/uploads\/[^"' )\s]+/g, (url) => {
  const name = decodeURIComponent(path.basename(url.split("?")[0]));
  const local = path.join(media, name);
  return fs.existsSync(local) ? `/media/${name}` : url;
});
html = html.replace(/https:\/\/skema\.co\/(?="|')/g, "/");

const heroAlts = [
  "Nairé Apartamentos",
  "Un nuevo proyecto está por llegar",
  "Mama Shelter Medellín",
  "Tamborá Apartamentos",
  "El Gran Aureal",
];
let heroIndex = 0;
html = html.replace(
  /<iframe class="hero-yt-iframe"[\s\S]*?<\/iframe>/g,
  () => {
    const i = heroIndex++;
    return `<img class="hero-still" src="/media/hero-${i + 1}.jpg" alt="${heroAlts[i] || "Proyecto Skema"}" />`;
  },
);

html = html.replace(
  /<video id="video-home"[\s\S]*?<\/video>/,
  `<img id="video-home" src="/media/hero-1.jpg" alt="Skema Promotora" />`,
);

html = html.replace(
  /<span class="wpcf7-form-control-wrap recaptcha"[\s\S]*?<\/noscript>\s*<\/span>/,
  "",
);

html = html.replace(
  'class="navbar fixed-top navbar-expand-lg navbar-light slide-in-top"',
  'class="navbar fixed-top navbar-expand-lg navbar-light slide-in-top navbar-glass-youtube"',
);

html = html.replace(
  'href="/"',
  'href="/"',
);

const popup = `
<div class="skema-popup" id="skema-popup" role="dialog" aria-modal="true" aria-label="Nairé Apartamentos">
  <div class="skema-popup__card">
    <button type="button" class="skema-popup__close" aria-label="Cerrar">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M4 4l14 14M18 4L4 18" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>
      </svg>
    </button>
    <a href="https://api.whatsapp.com/send/?phone=573163007430" target="_blank" rel="noopener noreferrer">
      <img src="/media/Banners.webp" alt="Nairé Apartamentos. Vida en equilibrio." />
    </a>
  </div>
</div>`;

ensure(path.join(root, "content"));
fs.writeFileSync(path.join(root, "content", "home.html"), html + popup, "utf8");
console.log("home.html", (html + popup).length);
