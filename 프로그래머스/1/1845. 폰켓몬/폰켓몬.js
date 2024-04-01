function solution(nums) {
    // 1. 배열 중복값 뺀 숫자 종류 1개씩 배열로 만들기
    // 2. nums.length/2 보다 숫자 종류가 많으면 nums.length/2 종류가 최대
    // 3. 그게 아니면 answer.length/2가 최대 종류
    let answer = [...new Set(nums)];
    return answer.length > nums.length/2 ? nums.length/2 : answer.length;
}