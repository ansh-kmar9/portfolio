// Copies build/index.html to build/404.html for GitHub Pages SPA fallback.
// Also creates CNAME file for custom domain and ensures PDF is present.
const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "..", "build");
const publicDir = path.join(__dirname, "..", "public");
const indexFile = path.join(buildDir, "index.html");
const notFoundFile = path.join(buildDir, "404.html");
const cnameFile = path.join(buildDir, "CNAME");
const sourcePdf = path.join(publicDir, "Ansh_kumar.pdf");
const buildPdf = path.join(buildDir, "Ansh_kumar.pdf");

try {
  console.log("Checking for index.html at:", indexFile);
  console.log("Build dir exists:", fs.existsSync(buildDir));
  console.log("Index file exists:", fs.existsSync(indexFile));

  if (fs.existsSync(indexFile)) {
    // Copy index.html to 404.html for SPA fallback
    fs.copyFileSync(indexFile, notFoundFile);
    console.log("Created 404.html for SPA fallback");

    // Create CNAME file for custom domain
    fs.writeFileSync(cnameFile, "anshkumar.me");
    console.log("Created CNAME file for custom domain");

    // Ensure PDF file is copied to build (force copy)
    if (fs.existsSync(sourcePdf)) {
      fs.copyFileSync(sourcePdf, buildPdf);
      console.log("Copied resume PDF to build folder");
      
      // Verify PDF was copied and check size
      const stats = fs.statSync(buildPdf);
      console.log(`Resume PDF size: ${stats.size} bytes`);
    } else {
      console.warn("Resume PDF not found in public folder");
    }
  } else {
    console.warn("index.html not found; skipping build tasks");
  }
} catch (e) {
  console.error("Failed to create build files", e);
  process.exitCode = 1;
}
