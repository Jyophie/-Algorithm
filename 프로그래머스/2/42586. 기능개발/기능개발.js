/*
function solution(progresses, speeds) {
    let answer = [];
    let duration = [];
    
    for(let i = 0; i < progresses.length; i++){
        duration.push(Math.floor((100 - progresses[i])/speeds[i]));
    }
    
    let cnt = 1;
    
    for(let j = 1; j < duration.length+1; j++){
        if(duration[j] > duration[j-1]){
            answer.push(cnt);
        } else {
            cnt++;
            continue;
        }
    }
    
    return answer;
}

// 풀이 문제점
// 전체 answer를 구하지 못하고 -1 갯수의 답까지만 구해짐

// 위의 로직이 완성 기간을 계산하고는 있지만,
// 이를 통해 각 배포마다 몇 개의 기능이 배포되는지 올바르게 관리하지 못하고 있음
// 각 기능의 완성 시간을 기반으로 조건을 판단해야함
*/

function solution(progresses, speeds) {
    let answer = [];

    // 각 기능이 배포되는데 필요한 일수를 계산합니다.
    let days = progresses.map((progress, index) => 
        Math.ceil((100 - progress) / speeds[index])
    );

    // 첫 번째 기능을 기준으로 시작합니다.
    let currentMaxDay = days[0];
    let count = 0;

    for (let i = 0; i < days.length; i++) {
        // 현재 기능의 완료일이 현재 배포일보다 크면, 이전 기능들을 배포합니다.
        if (days[i] > currentMaxDay) {
            answer.push(count);
            count = 1;
            currentMaxDay = days[i];
        } else {
            // 현재 배포 그룹에 기능을 추가합니다.
            count++;
        }
    }

    // 마지막 배포 그룹을 결과에 추가합니다.
    answer.push(count);
    
    return answer;
}
