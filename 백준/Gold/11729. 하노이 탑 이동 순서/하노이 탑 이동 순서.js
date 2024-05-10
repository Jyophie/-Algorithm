const num = require("fs").readFileSync("./dev/stdin").toString() * 1;

// 한 번에 한 개의 원판만 다른 탑으로 이동 가능
// 원판은 위의 것이 항상 아래보다 작아야함
// 최소한의 이동 횟수는?
const solution = (num) => {
  let count = 0;
  let answer = [];

  // func(n)이 func(n-1)로 점점 작아져  base case까지 도달해야함
  const hanoi = (n, from, other, to) => {
    if (!n) return;  // n이 0이면 return

    // from -> to : n을 옮기기 위해선 n-1을 다른 곳으로 옮겨야하기 때문(더 큰 판이 아래로 가야함)
    hanoi(n - 1, from, to, other);
    answer.push([from, to]);
    count += 1; // 이동시 + 1

    // other -> to : n -1을 다시 to로 옮김
    hanoi(n - 1, other, from, to);
  };

  hanoi(num, 1, 2, 3);
  console.log(count);

  return answer.map((i) => i.join(" ")).join("\n");
};

// 옮긴 횟수
console.log(solution(num));