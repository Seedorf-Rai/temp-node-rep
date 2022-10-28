//Setting up the path
const path = require('path');
//path Separation
console.log(path.sep);

//Path joining
const filePath = path.join('\content','subfolder','text.txt');
console.log(filePath);

//Path baseName
const baseName = path.basename(filePath);
console.log(baseName);

//Path Resolve
const absolutePath = path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolutePath);