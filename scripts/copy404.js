// Copies build/index.html to build/404.html for GitHub Pages SPA fallback.
// Also creates CNAME file for custom domain.
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const indexFile = path.join(buildDir, 'index.html');
const notFoundFile = path.join(buildDir, '404.html');
const cnameFile = path.join(buildDir, 'CNAME');

try {
  console.log('Checking for index.html at:', indexFile);
  console.log('Build dir exists:', fs.existsSync(buildDir));
  console.log('Index file exists:', fs.existsSync(indexFile));
  
  if (fs.existsSync(indexFile)) {
    // Copy index.html to 404.html for SPA fallback
    fs.copyFileSync(indexFile, notFoundFile);
    console.log('Created 404.html for SPA fallback');
    
    // Create CNAME file for custom domain
    fs.writeFileSync(cnameFile, 'anshkumar.me');
    console.log('Created CNAME file for custom domain');
  } else {
    console.warn('index.html not found; skipping 404.html and CNAME creation');
  }
} catch (e) {
  console.error('Failed to create build files', e);
  process.exitCode = 1;
}
