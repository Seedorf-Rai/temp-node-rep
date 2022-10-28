const {readFileSync,writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt','utf8');
console.log(first);
writeFileSync('./content/new.txt',`This is my first text ${first}`);
console.log('Done with the task');
console.log('Starting next task');
