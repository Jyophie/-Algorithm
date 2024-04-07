function solution(participant, completion) {
    let answer = '';
    let compMap = {};
    
    participant.forEach(name => {
        if(compMap.hasOwnProperty(name)){
            compMap[name]++;
        } else {
            compMap[name] = 1;
        }
    });
    
    completion.forEach(name => {
        if(compMap.hasOwnProperty(name)){
            compMap[name]--;
        } else {
            compMap[name] = 1;
        }
    });
    
    for(let key in compMap){
        if(compMap[key] > 0){
            answer = key;
            break;
        }
    }
    
    return answer;
}