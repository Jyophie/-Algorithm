/**
 * @param {number[]} nums
 * @return {number[]}
 */

// nums 배열에 0이 포함되어 있으면 문제 발생
// var productExceptSelf = function(nums) {
//     let totalNum = 1;
//     let answer = [];
    
//     for(let i = 0; i < nums.length; i++){
//         totalNum = totalNum*nums[i];
//     }
    
//     for(let i = 0; i < nums.length; i++){
//         answer.push(parseInt(totalNum/nums[i]));
//     }
    
//     return answer;
// };

var productExceptSelf = function(nums) {
    const n = nums.length;
    
    const prefix = new Array(n).fill(1);
    const suffix = new Array(n).fill(1);
    
    // prefix[i]는 nums[0]부터 nums[i-1]까지의 곱을 저장
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }
    
    // suffix[i]는 nums[i+1]부터 nums[n-1]까지의 곱을 저장
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }
    
    const answer = [];
    for (let i = 0; i < n; i++) {
        // console.log(prefix[i], suffix[i]);
        // 1 -0
        // -1 -0
        // -1 -9
        // -0 3
        // 0 1
        answer[i] = prefix[i] * suffix[i];
    }
    
    return answer;
};