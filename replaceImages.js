const fs = require('fs');
const path = require('path');

const replacements = {
  'ella.jpeg': 'ella.jpg',
  'sigiriya.jpeg': 'sigiriya.jpg',
  'kandy.jpeg': 'kandy.jpg',
  'wilpattu.jpeg': 'wilpattuwa.jpg',
  'yala.jpeg': 'yala%20elephants.jpg',
  'nuwara-eliya.jpeg': 'beautiful-ramboda-waterfall-sri-lanka-island.jpg',
  'galle.jpeg': 'traditional-stilt-fishermen-sri-lanka.jpg',
  'mirissa.jpeg': 'surf.jpg'
};

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
  
  for (const [oldName, newName] of Object.entries(replacements)) {
    if (content.includes(oldName)) {
      content = content.split(oldName).join(newName);
      changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
