/**
 * @param {number} n
 * @return {number}
 */
// var trailingZeroes = function(n) {
//     if(n === 0) return 0;
//     let answerNum = 0;
//     let factorial = 1;
    
//     for(let i = 1; i <= n; i++){
//         factorial *= i;
//         if(factorial <= n) answerNum = i;
//     }
    
//     answerNum = answerNum.toString().split("").filter((n) => n === "0");
    
//     return answerNum.length;
// };

var trailingZeroes = function(n) {
    if(n === 0) return 0;
    let count = 0;

    // 팩토리얼 값을 직접 계산하는 대신, 5로 나눈 몫을 사용해 끝자리 0의 개수를 세는 로직
    while (n >= 5) {
        n = Math.floor(n / 5);
        count += n;
    }
    
    return count;
};
