import fs from "node:fs";
import path from "node:path";

export default function HomePage() {
  const html = fs.readFileSync(path.join(process.cwd(), "content", "home.html"), "utf8");
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
