// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let leftMoney = 0;
	
	for await (const line of rl) {
		leftMoney = parseInt(line);
		rl.close();
	}
	
	const coins = [40, 20, 10, 5, 1];
	let count = 0;
	
	for(let coin of coins){
		if(leftMoney === 0) break;
		count += Math.floor(leftMoney / coin);
		leftMoney %= coin;
	}
	
	console.log(count);
	
	process.exit();
})();
