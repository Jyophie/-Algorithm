// 처음 시도한 풀이(시간 초과)
function solution(n) {
    let answer = 1;
    
    for(let i = 3; i <= n; i+=2){
        let count = 0;
        for(let j = 3; j <= i; j++){
            if(i%j === 0){
                count++;
            }
        }
        if(count === 1){
            answer++;
        }
    }
        
    return answer;
}

// n이 커질수록 반복 연산을 많이 수행하므로 비효율적
// '에라토스테네스의 체' 알고리즘 사용 -> 시간 복잡도 O(nloglogn)
// 1. 숫자 목록 초기화 (배열 만들고 모두 true로 초기화)
// 2. 소수 판별하며, 배수가 되는 항목은 false로 표기
// 3. true로 남아있는 소수 카운트

function solution(n) {
    // 소수 판별 여부를 저장할 배열, 초기값은 모두 true
    let isPrime = Array(n+1).fill(true);
    isPrime[0] = isPrime[1] = false; // 0과 1은 소수가 아님

    // 2부터 시작하여 n의 제곱근까지 반복
    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            // i의 배수들을 모두 소수가 아닌 것으로 표시
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // 배열에서 true의 개수를 세어 소수의 개수를 계산
    let answer = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) answer++;
    }

    return answer;
}
