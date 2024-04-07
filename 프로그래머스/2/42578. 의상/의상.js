function solution(clothes) {
    // 해시맵 만들기
    const clothesMap = {};
    let answer = 1;
    
    // 옷의 타입별 개수를 세어 해시 맵에 저장
    clothes.forEach(arr => {
        const [name, type] = arr;
        if(clothesMap.hasOwnProperty(type)){
            clothesMap[type]++;
        } else {
            clothesMap[type] = 1;
        }
    })
    
    // 타입별로 옷을 입거나, 입지 않거나 - 경우의 수 2가지
    // 타입별 옷 개수에 +1하고 곱하기
    for(const key in clothesMap){
        answer *= (clothesMap[key] +1);
    }
    
    // 모든 옷을 입지 않는 경우의 수 1 빼기
    return answer -1;
}