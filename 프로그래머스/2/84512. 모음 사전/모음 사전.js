function solution(word) {
    let answer = 0;
    let words = ['A', 'E', 'I', 'O', 'U'];
    let temp = [];


    function DFS(str, depth) {
        if(depth <= 5) {
            temp.push(str);

            for(let i=0; i<words.length; i++) {
                DFS(str+words[i], depth+1);    
            }
        }
    }

    DFS('', 0);

    answer = temp.indexOf(word);

    return answer;
}