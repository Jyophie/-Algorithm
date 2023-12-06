/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let answer = ''
    
    for(let i=0; i < strs[0].length; i++) {
        let char = strs[0][i];
        
        if(!char) return '';
        if(strs.every(str => str[i] === char)) {
            answer += char;
        } else break;
    }
    return answer;
};