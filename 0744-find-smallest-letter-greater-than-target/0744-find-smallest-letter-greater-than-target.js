/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let origin = letters;
    let tmp = letters.sort((a, b) => a - b);
    
    for(let i = 0; i < tmp.length; i++){
        if(tmp[i] > target){
            return tmp[i];
        }
    }
    
    return origin[0];
};