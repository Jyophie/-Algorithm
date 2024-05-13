// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin, output: process.stdout, });
	const input = [];
	
	for await (const line of rl) {
		input.push(line);
	}
	rl.close();
	
	const [N, K] = input[0].split(" ");
	const numbers = input[1].split(" ");
	
	let count = 0;
	
	numbers.forEach(number => {
		if(!number.includes(K)) {
			count++;
		}
	})
	
	console.log(count);
	process.exit();
})();
