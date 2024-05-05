/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = (nums) => {
    // nums가 비어있거나 null인 경우 큰 숫자를 만들 수 없으므로 0을 리턴
    if(!nums || nums.length === 0) {
        return '0';
    }
    
    // 두 숫자 a와 b를 문자열로 결합하여 두 가지 방식(b+a와 a+b)으로 비교
    // ex. 3과 30의 경우, 330과 303을 비교
    // 330이 303보다 크므로, 3이 30 앞에 오게 됨
    // 이런 방식으로 가장 큰 수를 형성할 수 있는 순서를 찾음
    nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
    
    // 정렬 후 배열의 첫 원소가 0인 경우 모든 원소가 0인 것으로 간주되므로 결과 값은 0
    if(nums[0] === 0) {
        return '0';
    }
    
    // 정렬이 완료되면 연결해서 반환
    return nums.join('');
};