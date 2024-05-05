const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input.shift();
const answer = input.sort((a,b) => a-b);
console.log(answer.join('\n'));