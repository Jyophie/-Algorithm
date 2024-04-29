function solution(s) {
    let answer = [];
    let tuples = s.slice(2, -2).split("},{").sort((a,b) => a.length - b.length);
    // 맨 앞&뒤 중괄호 및 중간 중괄호 삭제 후 튜플 길이에 따라 오름차순 정렬
    
    // 각 튜플을 쉼표 기준으로 자르고, 정답에 포함된 값 아니면 정답 배열에 넣어주기
    tuples.forEach(v => {
        let tuple = v.split(',');
        answer.push(tuple.find(e => !answer.includes(e)));
    });
    
    // 각 문자열 숫자로 변환
    return answer.map(e => Number(e));
}