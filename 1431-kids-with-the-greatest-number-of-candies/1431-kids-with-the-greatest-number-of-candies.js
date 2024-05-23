/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    let answer = [];
    
    for(let i = 0; i < candies.length; i++){
        if(candies[i] + extraCandies >= max){
            answer.push(true);
        } else {
            answer.push(false);
        }
    }
    
    return answer;
};