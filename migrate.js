const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
if (!fs.existsSync(srcDir)) fs.mkdirSync(srcDir);

const filesToMove = [
  'index.html',
  'contact.html',
  'privacy-policy.html',
  'refund-policy.html',
  'terms-of-service.html',
  'style.css',
  'client-logo-rail.css',
  'services-accordion.css',
  'client-logo-rail.js',
  'services-accordion.js',
  'sitemap.xml',
  'robots.txt',
  'site.webmanifest',
  'browserconfig.xml',
  'CNAME'
];

const dirsToMove = [
  'assets',
  'js',
  'public'
];

filesToMove.forEach(file => {
  if (fs.existsSync(file)) {
    fs.renameSync(file, path.join(srcDir, file));
  }
});

dirsToMove.forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.renameSync(dir, path.join(srcDir, dir));
  }
});

// Create includes directories
const includesDir = path.join(srcDir, '_includes');
const componentsDir = path.join(includesDir, 'components');
const layoutsDir = path.join(includesDir, 'layouts');

[includesDir, componentsDir, layoutsDir].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d);
});

console.log('Project restructured successfully.');
