const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

const N = Number(input[0]);
const cards = input[1].split(" ").map(Number);
const M = Number(input[2]);
const targets = input[3].split(" ").map(Number);

//const result = [];

//for (let i = 0; i < M; i++) {
//  if (cards.includes(targets[i])) {
//    result.push(1);
//  } else {
//    result.push(0);
//  }
//}

// cards 배열을 Set으로 변환
const cardSet = new Set(cards);

const result = [];

for (let i = 0; i < M; i++) {
  // Set을 사용하여 존재 여부를 확인
  if (cardSet.has(targets[i])) {
    result.push(1);
  } else {
    result.push(0);
  }
}

console.log(result.join(" "));
