// 다른 사람 풀이
// 이전값보다 큰 값을 찾으면 stack을 뒤에서부터 하나씩 체크하면서 적용 시키기

function solution(numbers) {
    const stack = [],result = Array(numbers.length).fill(-1)

    numbers.forEach(number=>{
        const sLastIdx = stack.length-1

        // 자신보다 뒤에 있는 숫자 중에서 큰 값일때 처리 
        if(number > stack[sLastIdx]){
            let backTrackingIdx = 0

            while(number > stack[sLastIdx-backTrackingIdx]){
                // 처음 접근하는 값일 때만 적용 
                if(result[sLastIdx-backTrackingIdx] === -1){
                    result[sLastIdx-backTrackingIdx] = number
                }
                backTrackingIdx++
            }
        }
        stack.push(number)
    })

    return result
}