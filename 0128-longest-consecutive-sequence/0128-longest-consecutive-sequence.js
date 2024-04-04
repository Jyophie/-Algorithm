/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const n = nums.length;

    // 배열의 길이 확인: 배열의 길이(n)가 0이면, 연속된 요소가 없으므로 0을 반환합니다.
    if (n === 0) {
        return 0;
    }

    // 배열을 오름차순으로 정렬
    nums.sort((a, b) => a - b);

    // cnt는 연속된 숫자 길이 추적, 초기값은 숫자 최소 하나는 포함되므로 1
    // maxi 지금까지 발견된 최장 길이
    let cnt = 1;
    let maxi = 0;


    // 현재 숫자(nums[i])가 이전 숫자(nums[i - 1])와 다르면(중복 제거), 다음을 확인합니다:
    // 현재 숫자가 이전 숫자보다 정확히 1만큼 크면, cnt를 1 증가시킵니다(연속 시퀀스를 발견했음).
    // 그렇지 않다면, 현재 cnt 값을 maxi와 비교하여 더 큰 값을 maxi에 저장하고, cnt를 1로 재설정합니다(새로운 시퀀스 시작).
    // 이 과정은 배열의 모든 요소를 검사할 때까지 반복됩니다.
    for (let i = 1; i < n; i++) {
        if (nums[i] !== nums[i - 1]) {
            if (nums[i] === nums[i - 1] + 1) {
                cnt++;
            } else {
                maxi = Math.max(maxi, cnt);
                cnt = 1;
            }
        }
    }

    return Math.max(maxi, cnt);
};

// 그러나 위 풀이는 시간복잡도 O(n)을 만족하지 못함. sort 단계에서 불만족됨.
// 해시 테이블(Set 객체) 사용한 풀이가 시간 복잡도 O(n) 만족.

var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let longestStreak = 0;

    for (const num of numSet) {
        // 현재 숫자가 연속 시퀀스의 시작점인지 확인
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // 현재 숫자부터 시작하는 연속 시퀀스의 길이를 계산
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            // 최대 길이 갱신
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};

