const readline = require('readline');

(async () => {
    let rl = readline.createInterface({ input: process.stdin });
    
    let inputLines = [];
    for await (const line of rl) {
        inputLines.push(line);
    }
    rl.close();
    
    const N = parseInt(inputLines[0]);
    const scores = inputLines[1].split(" ").map(Number);
	
    let maxSum = Math.max(...scores);
    let currentSum = scores[0];
    let isContinuous = false;

    for(let i = 1; i < scores.length; i++){
        if(scores[i-1] + 1 === scores[i]){
            currentSum += scores[i];
            isContinuous = true;
        } else {
            maxSum = Math.max(maxSum, currentSum);
            currentSum = scores[i];
            isContinuous = false;
        }
    }
    maxSum = Math.max(maxSum, currentSum); // 마지막 연속된 부분의 합과 비교

    console.log(maxSum);
    
    process.exit();
})();
