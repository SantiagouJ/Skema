import fs from "node:fs";
import path from "node:path";

export default function HomePage() {
  const raw = fs.readFileSync(path.join(process.cwd(), "content", "home.html"), "utf8");
  const html = raw.replace(/\r\n/g, "\n").replace(/<[^>]+>/g, (tag) => tag.replace(/[ \t]{2,}/g, " "));
  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />;
}
