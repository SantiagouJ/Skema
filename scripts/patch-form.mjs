import fs from "node:fs";
const p = "content/home.html";
let h = fs.readFileSync(p, "utf8");
h = h.replaceAll('aria-required="true"', 'required aria-required="true"');
h = h.replace('name="tyc" value="1"', 'name="tyc" value="1" required');
fs.writeFileSync(p, h);
console.log("required count", (h.match(/required/g) || []).length);
