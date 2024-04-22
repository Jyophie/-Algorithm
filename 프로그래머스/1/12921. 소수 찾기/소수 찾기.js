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
