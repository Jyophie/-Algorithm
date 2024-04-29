function solution(s) {
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        const arr = [];
        const temp = i === 0 ? s : s.slice(i) + s.slice(0, i);
        // 문자열 s를 i 칸만큼 왼쪽으로 회전시킨 결과를 temp 변수에 저장 - 회전 문자열 만들기
    
        // for문 돌면서 괄호가 문제 없이 잘 닫히는지 확인
        for (let j = 0; j < temp.length; j++) {
            if (arr[arr.length - 1] === '(' && temp[j] === ')') arr.pop();
            else if (arr[arr.length - 1] === '[' && temp[j] === ']') arr.pop();
            else if (arr[arr.length - 1] === '{' && temp[j] === '}') arr.pop();
            else arr.push(temp[j]);
        }
        
        // 배열이 비어있으면 모두 괄호가 완성되므로 카운트 +1 하기
        if (arr.length === 0) answer++;
    }
    
  return answer;
}