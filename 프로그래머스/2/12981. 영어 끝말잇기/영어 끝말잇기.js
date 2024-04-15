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