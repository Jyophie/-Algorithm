// Run by Node.js
const readline = require('readline');

(async () => {
    let rl = readline.createInterface({ input: process.stdin });
    
    let input = [];
    
    for await (const line of rl) {
        input.push(line);
    }
    
    rl.close();
    
    let [n, m] = input[0].split(" ").map(Number);
    let cards = input.slice(1);
    
    let cardSet = new Set();
    let i = 0;
    let ret = -1;
    
    while (true) {
        i++;
        let card = cards[i - 1];
        cardSet.add(card);
        if (cardSet.size === n) {
            ret = i;
            break;
        }
        if (i === m) {
            break;
        }
    }
    
    console.log(ret);
    
    process.exit();
})();
