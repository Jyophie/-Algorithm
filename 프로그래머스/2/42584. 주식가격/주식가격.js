function solution(prices) {
    let answer = [];
    
    for(let i = 0; i < prices.length; i++){
        let sum = 0;
        for(let j = i+1; j < prices.length; j++){
            sum += 1;
            if(prices[i] > prices[j]){
                break;
            }
        }
        answer.push(sum);
    }
    return answer;
}
