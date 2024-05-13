// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		let num = BigInt(line);
		let MOD = BigInt(1000000007);
		let answer = BigInt(1);
		
		for(let i = BigInt(1); i <= num; i++){
			answer = (answer * i) % MOD;
		}
		
		console.log(answer.toString());
		rl.close();
	}
	
	process.exit();
})();
