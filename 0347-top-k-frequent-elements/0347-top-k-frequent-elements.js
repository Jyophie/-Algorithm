/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqMap = new Map();
    const bucket = [];
    const result = [];

    // 해시맵에 각 숫자의 빈도 수를 저장
    // 1: 3
    // 2: 2
    // 3: 1
    for (let num of nums) {
        if (freqMap.has(num)) {
            freqMap.set(num, freqMap.get(num) + 1);
        } else {
            freqMap.set(num, 1);
        }
    }

    // 버킷 초기화: 빈도 수를 인덱스로 사용
    // bucket[0] = [] (0번 등장하는 숫자는 없음)
    // bucket[1] = []
    // bucket[2] = []
    // bucket[3] = []
    // bucket[4] = []
    // bucket[5] = []
    // bucket[6] = []
    for (let i = 0; i <= nums.length; i++) {
        bucket[i] = [];
    }

    // 버킷에 숫자를 빈도 수에 따라 배치
    // bucket[1] = [3]
    // bucket[2] = [2]
    // bucket[3] = [1]
    // 나머지 버킷은 비어있음
    for (let [num, count] of freqMap) {
        bucket[count].push(num);
    }

    // 가장 빈번한 요소부터 결과 배열에 추가
    // 가장 높은 빈도수부터 버킷을 확인하면서 k개의 요소를 결과 배열에 추가
    // k개를 채울 때까지 진행
    // 버킷을 뒤에서부터 검사 -> bucket[6], [5], [4]는 비어있음
    // bucket[3](빈도수 3)에는 [1]이 있음 - answer에 푸시
    // bucket[2](빈도수 2)에는 [2]가 있음 - answer에 푸시
    // k개의 요소를 찾았으므로 종료
    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
        if (bucket[i].length > 0) {
            result.push(...bucket[i]);
        }
    }

    return result.slice(0, k); // 만약 결과가 k보다 많다면, 처음 k개만 반환
};
