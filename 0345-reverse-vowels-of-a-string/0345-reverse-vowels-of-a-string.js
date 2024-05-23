/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = 'aeiouAEIOU';
    let chars = s.split("");
    let reversedVowels = chars.filter(char => vowels.includes(char)).reverse();
    
    let index = 0;
    let result = chars.map(char => {
        if (vowels.includes(char)) {
            return reversedVowels[index++];
        }
        return char;
    });

    return result.join("");
};
