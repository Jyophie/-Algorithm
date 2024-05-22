/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    word1 = word1.split("");
    word2 = word2.split("");
    
    let length = word1.length > word2.length ? word1.length : word2.length;
    let merged = [];
    
    for(let i = 0; i < length; i++){
        merged.push(word1[i]);
        merged.push(word2[i]);
    }
    
    merged = merged.filter((w) => w !== undefined);
    
    return merged.join("");
};