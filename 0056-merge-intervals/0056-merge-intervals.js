/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// 틀린 풀이
// var merge = function(intervals) {
//     let answer = [];
//     intervals.sort((a, b) => a[0] - b[0]);
//     console.log(intervals);
    
//     for(let i = 0; i < intervals.length; i++){
//         if(intervals[i][1] >= intervals[i+1][0]){
//             let newArr = []
//             newArr.push(intervals[i][0]);
//             newArr.push(intervals[i+1][1]);
//             answer.push(newArr);
//         } else {
//             answer.push(intervals[i]);
//         }
//     }
    
//     return answer;
// };

// 문제점
// 1. Index Out of Bounds: intervals[i+1][0]은 i가 마지막 인덱스일 때 undefined에 접근하게 됩니다. 이는 배열 범위를 초과하는 접근으로, 에러를 발생시킬 수 있습니다.
// 2. 병합 로직: 제시한 코드는 인접한 구간들만을 병합합니다. 그러나, 병합된 구간이 이후의 구간들과도 계속 겹칠 수 있으므로, 이런 방식은 충분하지 않습니다. 예를 들어 [1,3], [2,6], [5,8]는 연속해서 병합되어야 하는데, 코드는 첫 두 구간만 병합하고 세 번째 구간을 별도로 처리합니다.
// 3. 병합 결과 추가: 현재 로직은 중복 병합을 제대로 처리하지 못하며, 일부 구간이 누락될 수 있습니다. 또한, 겹치지 않는 구간도 올바르게 처리되지 않을 수 있습니다.

var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;
    
    // 구간을 시작점으로 오름차순 정렬
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [intervals[0]]; // 첫 구간을 결과에 추가

    for (let i = 1; i < intervals.length; i++) {
        const last = result[result.length - 1];
        const current = intervals[i];
        
        // 현재 구간의 시작점이 마지막 구간의 종료점보다 작거나 같다면 겹치는 것
        if (current[0] <= last[1]) {
            // 종료점 업데이트
            last[1] = Math.max(last[1], current[1]);
        } else {
            // 겹치지 않으면 결과에 추가
            result.push(current);
        }
    }
    
    return result;
};
