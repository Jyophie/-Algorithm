function solution(n)
{
    let answer = 0
    while(n !== 0){
        // 여기에서 왜 짝수일 경우, 2로 나누는 것인지? -> 절반으로 나누어가는 것이 가장 적게 건전지를 사용하는 방안
        if(n%2 === 0){
            n /= 2
        }
        else{
            n--
            answer++
        }
    }
    return answer
}