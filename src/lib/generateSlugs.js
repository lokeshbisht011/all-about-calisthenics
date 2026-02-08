const fs = require("fs");
const path = require("path");

const BLOG_DIR = path.join(
  process.cwd(),
  "/src/app/blogs/(post)/(planche)"
);

const OUTPUT_FILE = path.join(
  process.cwd(),
  "/src/lib/plancheSlugs.js"
);

function generateSlugs() {
  if (!fs.existsSync(BLOG_DIR)) {
    console.error("❌ Blog directory not found:", BLOG_DIR);
    process.exit(1);
  }

  const slugs = fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const fileContent = `// AUTO-GENERATED FILE – DO NOT EDIT MANUALLY

export const plancheSlugs = ${JSON.stringify(slugs, null, 2)};
`;

  fs.writeFileSync(OUTPUT_FILE, fileContent, "utf8");

  console.log("✅ Planche slugs generated:");
  slugs.forEach((slug) => console.log(" -", slug));
}

generateSlugs();
