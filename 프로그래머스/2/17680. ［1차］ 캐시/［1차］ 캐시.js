function solution(cacheSize, cities) {
    let answer = 0;
    let cityArr = [];

    for(let i = 0; i < cities.length; i++){
        let current = cities[i].toLowerCase();
        let findCity = cityArr.find((city) => city === current);

        if(!findCity){
            // 기존 데이터베이스에 없을 경우(캐시 미스), 배열에 넣어주기
            cityArr.push(current);
            if(cityArr.length > cacheSize){
                // 캐시 크기를 넘어갈 경우, 가장 오래된 데이터베이스에 등록된 도시 빼기
                cityArr.shift();
            }
            // 실행 시간 5 추가
            answer += 5;
        } else {
            // 기존 데이터베이스에 있는 경우(캐시 히트), 
            // 해당 도시 이름을 배열에서 제거 했다가 최근 사용되었으므로 배열의 마지막에 추가
            // 실행 시간 1 추가
            cityArr = cityArr.filter((city) => city !== current);
            cityArr.push(current);
            answer ++;
        }
    }
    return answer;
}
