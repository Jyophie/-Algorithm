/*
function solution(progresses, speeds) {
    let answer = [];
    let duration = [];
    
    for(let i = 0; i < progresses.length; i++){
        duration.push(Math.floor((100 - progresses[i])/speeds[i]));
    }
    
    let cnt = 1;
    
    for(let j = 1; j < duration.length; j++){
        if(duration[j] > duration[j-1]){
            answer.push(cnt);
            cnt = 1;
        } else {
            cnt++;
        }
    }
    
    answer.push(cnt);
    
    return answer;
}
*/

function solution(progresses, speeds) {
    let answer = [];
    let duration = [];

    // 각 작업이 완료되는 데 필요한 정확한 일수 계산 (올림 처리)
    for (let i = 0; i < progresses.length; i++) {
        duration.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }

    let cnt = 1;
    let maxDuration = duration[0];  // 첫 번째 작업의 완료 일수를 초기 최대값으로 설정

    for (let j = 1; j < duration.length; j++) {
        if (duration[j] > maxDuration) {  // 현재 작업 완료 일수가 이전 최대 완료 일수보다 큰 경우
            answer.push(cnt);  // 이전까지의 작업 개수를 결과에 추가
            cnt = 1;  // 카운트 초기화
            maxDuration = duration[j];  // 최대 완료 일수 업데이트
        } else {
            cnt++;  // 현재 그룹에 작업 추가
        }
    }
    
    answer.push(cnt);  // 마지막 그룹의 작업 개수 추가

    return answer;
}
