// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		let [A, B] = line.split(" ").map(Number);
		console.log(A+B);
		rl.close();
	}
	
	process.exit();
})();
