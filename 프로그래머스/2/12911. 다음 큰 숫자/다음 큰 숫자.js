function solution(n) {
    var answer = n+1;
    let count1 = n.toString(2).split("").filter(a => a === "1").length;
    let count2 = 0;
    
    while(true){
        count2 = (answer).toString(2).split("").filter(a => a === "1").length;
        
        if(count1 === count2){
            break;
        } else
            answer++;
    }
    
    return answer;
}