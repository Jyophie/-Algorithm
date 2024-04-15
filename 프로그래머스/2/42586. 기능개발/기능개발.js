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
