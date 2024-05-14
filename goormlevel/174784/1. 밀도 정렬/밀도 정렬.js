const readline = require('readline');

(async () => {
    let rl = readline.createInterface({ input: process.stdin });
    
    let inputLines = [];
    for await (const line of rl) {
        inputLines.push(line);
    }
    rl.close();
    
    const N = parseInt(inputLines[0]);
    let materials = [];

    for (let i = 1; i <= N; i++) {
        const [w, v] = inputLines[i].split(" ").map(Number);
        const density = w / v;
        materials.push({ index: i, weight: w, density: density });
    }

    // 밀도 높은 순으로 정렬, 밀도가 같으면 무게 큰 순으로, 무게가 같으면 인덱스 작은 순으로
    materials.sort((a, b) => {
        if (b.density !== a.density) {
            return b.density - a.density;
        } else if (b.weight !== a.weight) {
            return b.weight - a.weight;
        } else {
            return a.index - b.index;
        }
    });

    console.log(materials[0].index);
    
    process.exit();
})();
