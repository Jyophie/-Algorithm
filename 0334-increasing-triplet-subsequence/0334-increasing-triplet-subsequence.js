/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var increasingTriplet = function(nums) {
//     let answer = false;
//     for(let i = 0; i < nums.length-1; i++){
//         if(nums[i] < nums[i+1] && nums[i+1] < nums[i+2]){
//             answer = true;
//             break;
//         }
//     }
//     return answer;
// };

var increasingTriplet = function(nums) {
    let first = Number.MAX_SAFE_INTEGER;
    let second = Number.MAX_SAFE_INTEGER;
    
    for (let num of nums) {
        if (num <= first) {
            first = num; // first로 설정
        } else if (num <= second) {
            second = num; // second로 설정
        } else {
            // num이 first와 second보다 크므로, 증가하는 트리플릿을 찾음
            return true;
        }
    }
    
    return false; // 증가하는 트리플릿을 찾지 못함
};