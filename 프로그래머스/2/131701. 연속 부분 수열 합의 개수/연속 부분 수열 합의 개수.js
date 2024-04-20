function solution(elements) {
    let n = elements.length;
    let arr = elements.concat(elements);
    let sumSet = new Set();
    
    // 원본 배열 길이만큼 시작점 설정
    for(let start = 0; start < n; start++){
        let currentSum = 0;
        for(let length = 1; length <= n; length++){ // 1부터 n까지 길이
            currentSum += arr[start + length - 1]; // 다음 원소 더하기
            sumSet.add(currentSum); // 현재 합을 집합에 추가
        }
    }
    
    return sumSet.size;
}