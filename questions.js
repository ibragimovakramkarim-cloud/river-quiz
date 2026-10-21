const fs = require('fs');
const path = require('path');

const themesDir = path.join(__dirname, 'themes');
let themes = [];

if (fs.existsSync(themesDir)) {
  const files = fs.readdirSync(themesDir).filter(f => f.endsWith('.js'));
  themes = files.map(file => {
    const filePath = path.join(themesDir, file);
    return require(filePath);
  });
}

module.exports = themes;
