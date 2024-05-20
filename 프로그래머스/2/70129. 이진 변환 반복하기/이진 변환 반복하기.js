function solution(s) {
    let answer = [];
    let length = 0;
    let count = 0;
    let countZero = 0;
    
    while(s.length > 1){
        length = s.length;
        s = s.split("0").join("");
        
        count ++;
        countZero += (length - s.length);
        
        s = s.length.toString(2);
    }
    
    answer.push(count);
    answer.push(countZero);
    
    return answer;
}