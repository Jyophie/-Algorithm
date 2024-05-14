// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let inputLines = [];
	
	for await (const line of rl) {
		inputLines.push(line);
	}
	
		rl.close();
	
	const [N, K] = inputLines[0].split(" ").map(Number);
	let queue = [];
	
	for(let i = 1; i <= N; i++){
		const [order, num] = inputLines[i].split(" ");
		if(order === "push"){
			if(queue.length < K){
				queue.push(parseInt(num));
			} else if(queue.length >= K){
				console.log("Overflow");
			}
		} else if(order === "pop"){
			if(queue.length > 0){
				console.log(queue[0]);
				queue.shift();
			} else if(queue.length === 0){
				console.log("Underflow");
			}
		}
	}
	
	
	process.exit();
})();
