const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const N = input.shift();

input.sort((a,b) => a-b).forEach(num => console.log(num));