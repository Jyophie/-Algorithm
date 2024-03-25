function solution(s){
    let answer = true;
    let count = 0;
    
    s = s.split("");
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            count ++;
        } else {
            count --;
        } if (count < 0){
            return false;
        }
    }

    answer = count === 0 ? true : false;
    return answer;
}