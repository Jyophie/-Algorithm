/*
function solution(n, words) {
    let answer = [];

    // 1. 전체를 탐색 -> 앞 단어의 마지막 알파벳 === 뒷 단어의 첫 알파벳 일치 여부 확인
    // 2. 일치할 경우 -> 뒷 단어의 중복 여부 확인
    // 3. 중복 아니면 다음으로 넘어가기
    
    // 1,2에서 불일치/중복일 경우 뒷 단어 말한 사람 번호, 회차 리턴
    
   for(let i = 0; i < words.length-1; i++){
       if(words[i].slice(-1) !== words[i+1].slice(0,1)){
           return [(i+2)%n, Math.floor(i/n)+2];
       }
       for(let j = 1; j < words.length; j++){
           if(words[i] === words[j]){
               return[(j+1)%n, Math.floor(j/n)+1];
           }
       }
   }

    return [0,0];
}

// 풀이의 문제점
// 1. 중복 단어 검사 로직의 문제점: 단어의 중복을 검사하는 부분에서 for 반복문이 잘못 설정되어 있습니다. i가 현재 단어의 인덱스이므로, j는 0에서 시작해야 하며, i까지만 검사해야 합니다. 현재 코드는 항상 1에서 시작하고 전체 범위를 검사하므로, 중복 검사가 제대로 이루어지지 않습니다.
// 2. 중복 단어의 위치 계산: 중복 단어가 발견된 경우, 해당 단어를 말한 사람과 그 회차를 정확하게 계산하는 데 문제가 있습니다. 중복 단어를 발견했을 때의 인덱스 j에 대해서 %n와 /n 연산을 통해 사람 번호와 차례를 계산해야 하나, 현재 코드의 계산 방식은 오류가 있습니다. j%n + 1이 사람 번호가 되어야 하고, Math.floor(j/n) + 1이 차례가 되어야 합니다.
// 3. 끝말잇기 규칙 위반 시 차례 계산 문제: 끝말잇기의 규칙을 위반했을 때 (즉, 단어가 마지막 글자로 시작하지 않을 때) i+2와 Math.floor(i/n) + 2 계산은 잘못되었습니다. 이는 오프셋 문제를 일으킬 수 있습니다. 정확하게는 (i+1) % n + 1과 Math.floor((i+1)/n) + 1로 계산해야 합니다.
*/

function solution(n, words) {
    let answer = [];
    let usedWords = new Set();
    
   usedWords.add(words[0]); // 첫 단어 추가

    for (let i = 1; i < words.length; i++) {
        const prevWord = words[i - 1];
        const currentWord = words[i];

        // 끝말잇기 규칙 위반 또는 중복 단어 사용
        if (prevWord.slice(-1) !== currentWord.charAt(0) || usedWords.has(currentWord)) {
            const person = (i % n) + 1;
            const turn = Math.floor(i / n) + 1;
            return [person, turn];
        }

        // 현재 단어를 사용한 단어 집합에 추가
        usedWords.add(currentWord);
    }

    // 모든 단어를 정상적으로 사용한 경우
    return [0, 0];
}
