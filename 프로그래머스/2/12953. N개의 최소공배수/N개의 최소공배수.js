function solution(arr) {
    var answer = 0;
    let n = 1;
    let flag = false;

    while(!flag){
        n++;
        
        for(let i = 1; i < arr.length; i++){
            if((arr[0] * n) % arr[i] === 0){
                flag = true;
            } else {
                flag = false;
                break;
            }
        }
    }
    
    answer = arr[0] * n;
    return answer;
}