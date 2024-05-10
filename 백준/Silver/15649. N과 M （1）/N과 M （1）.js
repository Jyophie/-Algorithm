const input = require("fs")
  .readFileSync('/dev/stdin')
  .toString()
  .split(" ")
  .map(Number);

let N = input[0];
let M = input[1];

function solution(N, M) {
  const sequence = Array(M).fill(0);
  const visited = Array(N).fill(false);
  let result = "";

  function dfs(K) {
    if (K === M) {
      const arr = [];
      for (let i = 0; i < M; i++) {
        arr.push(sequence[i]);
      }
      return (result += arr.join(" ") + "\n");
    }
    for (let i = 1; i <= N; i++) {
      if (!visited[i]) {
        sequence[K] = i;
        visited[i] = true;
        dfs(K + 1);
        visited[i] = false;
      }
    }
  }

  dfs(0);
  return result;
}

console.log(solution(N, M));
