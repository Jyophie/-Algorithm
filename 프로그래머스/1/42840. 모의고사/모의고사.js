function solution(answers) {
    let answer = [];
    let tmp = [0, 0, 0];
    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === one[i % one.length]) {
            tmp[0]++;
        }
        if (answers[i] === two[i % two.length]) {
            tmp[1]++;
        }
        if (answers[i] === three[i % three.length]) {
            tmp[2]++;
        }
    }
    
    let max = Math.max(...tmp);
    for (let i = 0; i < tmp.length; i++) {
        if (max === tmp[i]) {
            answer.push(i + 1);
        }
    }
    
    return answer.length > 1 ? answer.sort((a, b) => a - b) : answer;
}
