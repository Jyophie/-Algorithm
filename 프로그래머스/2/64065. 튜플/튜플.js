function solution(s) {
    let answer = [];
    let arr = s.slice(2, -2).split("},{").sort((a,b) => a.length - b.length);
    
    arr.forEach(v => {
        let tuple = v.split(',');
        answer.push(tuple.find(e => !answer.includes(e)));
    });
    
    return answer.map(e => Number(e));
}