function solution(array, commands) {
    let answer = [];
    let tmp = 0;
    
    for(let i = 0; i < commands.length; i++){
        tmp = array.slice(commands[i][0]-1, commands[i][1]).sort((a,b) => a-b);
        answer.push(tmp[commands[i][2]-1]);
    }
    
    return answer;
}