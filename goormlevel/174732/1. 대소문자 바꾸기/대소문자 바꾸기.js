// Run by Node.js
const readline = require('readline');

(async () => {
    let rl = readline.createInterface({ input: process.stdin });
    
    let countLines = 0;
    let targetString = "";

    for await (const line of rl) {
        countLines++;
        if (countLines === 2) {  // 두 번째 줄에 있는 문자열만 처리
            targetString = line.split("").map(char => {
                // 현재 문자가 대문자인 경우 소문자로, 그렇지 않으면 대문자로 변환
                return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
            }).join("");  // 변환된 문자 배열을 다시 문자열로 결합
            console.log(targetString);
            rl.close();
        }
    }
    
    process.exit();
})();
