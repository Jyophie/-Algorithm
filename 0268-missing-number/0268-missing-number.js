/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let len = nums.length;
    
    nums = nums.sort((a,b) =>  a-b);
    
    for(let i = 0; i <= len; i++){
        if(nums[i] !== i){
            return i;
        }
    }
};