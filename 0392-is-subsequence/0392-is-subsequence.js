/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;

    while (i < s.length && j < t.length) {
        // s[i]와 t[j]가 같으면 i를 증가
        if (s[i] === t[j]) {
            i++;
        }
        // 항상 j를 증가시켜 t의 다음 문자를 확인
        j++;
    }

    // i가 s의 길이와 같아지면 s의 모든 문자가 순서대로 t에 존재한다는 의미
    return i === s.length;
};