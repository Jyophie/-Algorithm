// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let N = 0;
	let sum = 0;
	
	for await (const line of rl) {
		N = parseInt(line);
		sum = line.split(" ").map(Number).reduce((a, c) => a + c, 0);
		rl.close();
	}
	
	console.log(sum.toString(8));
	
	process.exit();
})();
