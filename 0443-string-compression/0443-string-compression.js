/**
 * @param {character[]} chars
 * @return {number}
 */
// var compress = function(chars) {
//     let answer = [];
    
//     if(chars.length === 1){
//         return chars;
//     }
    
//     answer.push(chars[0]);
    
//     for(let i = 1; i < chars.length; i++){
//         let count = 1;
//         let target = answer[answer.length-1];
        
//         if(chars[i] === target){
//             count++;
//         } else if(chars[i] !== target){
//             if(count > 1){
//                 answer.push(count);
//             } else {
//                 answer.push(chars[i]);
//             }
//         }
//     }
    
//     return answer;
// };

var compress = function(chars) {
    let write = 0; // 쓰기 포인터
    let read = 0; // 읽기 포인터
    
    while (read < chars.length) {
        let char = chars[read];
        let count = 0;
        
        // 현재 문자 그룹의 길이를 계산
        while (read < chars.length && chars[read] === char) {
            read++;
            count++;
        }
        
        // 문자 기록
        chars[write] = char;
        write++;
        
        // 그룹 길이가 1보다 크면 길이 기록
        if (count > 1) {
            let countStr = count.toString();
            for (let i = 0; i < countStr.length; i++) {
                chars[write] = countStr[i];
                write++;
            }
        }
    }
    
    return write; // 새로운 길이 반환
};