// Brings the shared CS2 files from the FrameCheck project (the one copy of the truth: its Telegram bot uses them too).
//   npm run sync                      (FrameCheck folder next to this one)
//   npm run sync -- C:/path/to/Framecheck
// Then: npm test, and commit the changed files.
import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.resolve(process.argv[2] || path.join(root, "..", "Framecheck"));
if (!fs.existsSync(path.join(source, "src", "cs2-logic.mjs"))) {
  console.error("FrameCheck project not found at " + source);
  process.exit(1);
}
const files = [["src/cs2-logic.mjs", "public/cs2/logic.js"], ["src/cs2-names.mjs", "public/cs2/names.js"]];
for (const name of ["cs2-skins.json", "cs2-prices.json", "cs2-skin-details.json", "cs2-maps.json"]) files.push(["src/data/" + name, "public/cs2/data/" + name]);
for (const name of fs.readdirSync(path.join(source, "src/cs2/maps"))) files.push(["src/cs2/maps/" + name, "public/cs2/maps/" + name]);
files.push(["THIRD_PARTY_NOTICES.md", "public/cs2/licenses.txt"], ["THIRD_PARTY_NOTICES.md", "THIRD_PARTY_NOTICES.md"]);

let changed = 0;
for (const [from, to] of files) {
  const data = fs.readFileSync(path.join(source, from)), target = path.join(root, to);
  if (fs.existsSync(target) && fs.readFileSync(target).equals(data)) continue;
  fs.mkdirSync(path.dirname(target), {recursive: true});
  fs.writeFileSync(target, data);
  console.log("updated " + to);
  changed++;
}
console.log(changed ? changed + " file(s) updated" : "everything is up to date");
