/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;

    for(let i = 0; i < s.length; i++){
        let tmpStr = '';
        let charSet = new Set();
        
        for(let j = i; j < s.length; j++){
            if (charSet.has(s[j])) {
                break;
            }
            tmpStr += s[j];
            charSet.add(s[j]);
            maxLength = Math.max(maxLength, tmpStr.length);
        }
    }

    return maxLength;
};
