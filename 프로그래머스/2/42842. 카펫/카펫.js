function solution(brown, yellow) {
    let answer = [];    
    let sum = brown + yellow;
    
    for(let i = 3; i < sum; i++){
        for(let j = 1; j < sum; j++){
            if(i >= j){
                if(i*j === sum){
                    if((i-2)*(j-2) === yellow){
                        return [i, j];
                    }
                }
            }
        }
    }
}
