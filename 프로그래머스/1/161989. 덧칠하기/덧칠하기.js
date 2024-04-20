function solution(n, m, section) {
    let answer = 0;
    let part = 0; 
    // 마지막으로 롤러로 페인트칠한 구역의 오른쪽 끝 번호

    // 배열을 순회하면서, 현재 구역 v가 part보다 큰지 검사
    // v가 part보다 크면, 이전에 칠한 구역 넘어 새로운 구역 도달 - 페인트를 칠해야함
    section.forEach((v) => {
        if (v > part) {
        part = v + m - 1;
        answer++;
    }
  });

  return answer;
}