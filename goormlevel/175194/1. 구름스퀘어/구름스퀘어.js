// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let input = [];
	
	for await (const line of rl) {
		input.push(line);
	}
	
	rl.close();
	
	let N = parseInt(input[0]);
	let events = input.slice(1).map(event => event.split(" ").map(Number));
	
	// 종료 시간 빠른 기준으로 정렬, 종료 시간이 같으면 시작 시간 빠른 기준으로 정렬
	events.sort((a, b) => a[1] - b[1] || a[0] - a[0]);
	
	let count = 0;
	let lastEndTime = -1; // 가장 마지막에 선택된 행사의 종료 시간
	
	for (let event of events){
		let start = event[0];
		let end = event[1];
		
		// 행사가 이전 행사 종료 시점보다 1시간 이후 시작해야 함
		if(start > lastEndTime){
			count++;
			lastEndTime = end;
		}
	}
	
	console.log(count);
	
	process.exit();
})();
