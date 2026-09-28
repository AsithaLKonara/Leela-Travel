const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  // This regex matches <Badge...> [ XX / ... ] </Badge>
  // including newlines between them
  const badgeRegex = /<Badge[^>]*>\s*\[\s*\d+\s*\/[\s\S]*?\]\s*<\/Badge>/gi;
  // Also match badges like [ ALL 10 CEYLON DESTINATIONS ]
  const badgeRegex2 = /<Badge[^>]*>\s*\[\s*[A-Z0-9\s]+\s*\]\s*<\/Badge>/gi;
  
  if (badgeRegex.test(content)) {
    content = content.replace(badgeRegex, '');
    changed = true;
  }
  
  if (badgeRegex2.test(content)) {
    content = content.replace(badgeRegex2, '');
    changed = true;
  }
  
  // Also remove label="[ 04 / DESTINATIONS & TRAVEL PACKAGES ]"
  const labelRegex = /label="\[.*?\]"/g;
  if (labelRegex.test(content)) {
    content = content.replace(labelRegex, '');
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Removed badges from ' + file);
  }
});
