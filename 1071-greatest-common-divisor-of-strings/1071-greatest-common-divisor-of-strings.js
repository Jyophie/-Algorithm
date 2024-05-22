/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // 주어진 파라미터가 똑같지 않다면 빈 문자열 반환
    if(str1 + str2 !== str2 + str1) return "";
    
    // 재귀 활용
    // 주어진 파라미터들의 길이를 나눠서 나머지가 0이 되게하고
    // 0이 되게 만든 길이대로 잘라주면 반복되는 요소가 된다
    function GCD(a, b){
        if(a % b === 0) return b;
        
        return GCD(b, a % b);
    }
    
    const length = GCD(str1.length, str2.length);
    return str2.slice(0, length);
};