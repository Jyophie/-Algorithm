// function solution(n, left, right) {
//     let answer = [];
    
//     for(let i = 1; i <= n; i++){
//         for(let j = 1; j <= n; j++){
//             if(i < j){
//                 answer.push(j);
//             } else {
//                 answer.push(i);
//             }
//         }
//     }
    
//     return answer.slice(left, right+1);
// }

// 2차원 배열을 만들지 않더라도 구하고자 하는 위치의 값을 보면
// 1. (x, y) 의 최댓값에서 +1을 해주면 해당 좌표의 값이 나온다.

// 그럼 좌표를 어떻게 구할까?
// 2. (Math.floor(left / n), left % n)

function solution(n, left, right) {
    let answer = [];

    while(left <= right) {

        // 2)
        let value = [Math.floor(left / n), left % n];

        // 1)
        value = Math.max(value[0], value[1]);
        answer.push(value + 1);

        left += 1;
    }

    return answer;
}