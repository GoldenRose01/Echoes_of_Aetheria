const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");

async function optimize(directory) {
  let original = 0, optimized = 0, count = 0;
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      const result = await optimize(file);
      original += result.original; optimized += result.optimized; count += result.count;
    } else if (/^[cnd]\d+\.png$/i.test(entry.name)) {
      const target = file.replace(/\.png$/i, ".webp");
      await sharp(file).resize({ width: 540, withoutEnlargement: true }).webp({ quality: 82 }).toFile(target);
      original += (await fs.stat(file)).size;
      optimized += (await fs.stat(target)).size;
      count++;
    }
  }
  return { count, original, optimized };
}
optimize(path.join(__dirname, "../assets/cards")).then(console.log).catch(error => {
  console.error(error); process.exitCode = 1;
});
