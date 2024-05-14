const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let n = 0;
	const MOD = 1000000007; // 상수로 설정하여 사용할 때마다 파싱하지 않도록 수정
	
	for await (const line of rl) {
		n = parseInt(line);
	}
	
	rl.close();
	
	if (n == 1) {
		console.log(0); // n이 1일 경우 바로 출력
		process.exit();
	}
	if (n == 2) {
		console.log(1); // n이 2일 경우 바로 출력
		process.exit();
	}
	
	let arr = Array(n + 1).fill(0); // 배열 크기를 n+1로 설정
	arr[1] = 0;
	arr[2] = 1;
	
	for (let i = 3; i <= n; i++) {
		arr[i] = (arr[i-1] + arr[i-2]) % MOD; // 각 단계마다 MOD 연산
	}
	
	console.log(arr[n]);
	
	process.exit();
})();
