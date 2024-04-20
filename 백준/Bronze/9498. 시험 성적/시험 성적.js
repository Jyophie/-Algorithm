const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();

const num = Number(input);

if(num <= 100 && num >= 90) console.log('A');
else if(num < 90 && num >= 80) console.log('B');
else if(num < 80 && num >= 70) console.log('C');
else if(num < 70 && num >= 60) console.log('D');
else if(num < 60) console.log('F');