/*
처음 시도한 풀이(시간 초과로 일부 테스트 케이스 실패)
function solution(n,a,b)
{
    let answer = 1;

    // 아래 while문 조건은 A와 B가 직접적으로 연속적인 숫자로 만날 때만 루프가 종료됨
    // 하지만 토너먼트 구조에서는 A,B가 연속된 숫자가 아니어도 대결할 수 있음
    // A,B가 같은 숫자로 압축될 때까지로 조건을 변경해야 함
    while(a+1 !== b){
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        answer ++;
    }
    
    return answer;
}
*/

function solution(n, a, b) {
    let answer = 0;

    while (a !== b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer++;
    }
    
    return answer;
}
