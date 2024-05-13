// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		let [A, B] = line.split(" ").map(Number);
		let sum = A+B;
		
		console.log(sum.toFixed(6));
		rl.close();
	}
	
	process.exit();
})();
