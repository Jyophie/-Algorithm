# [level 1] 완주하지 못한 선수 - 42576 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42576) 

### 성능 요약

메모리: 70.4 MB, 시간: 54.69 ms

### 구분

코딩테스트 연습 > 해시

### 채점결과

정확성: 58.3<br/>효율성: 41.7<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 04월 07일 23:00:43

### 문제 설명

<p>수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.</p>

<p>마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.</p>

<h5>제한사항</h5>

<ul>
<li>마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.</li>
<li>completion의 길이는 participant의 길이보다 1 작습니다.</li>
<li>참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.</li>
<li>참가자 중에는 동명이인이 있을 수 있습니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>participant</th>
<th>completion</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>["leo", "kiki", "eden"]</td>
<td>["eden", "kiki"]</td>
<td>"leo"</td>
</tr>
<tr>
<td>["marina", "josipa", "nikola", "vinko", "filipa"]</td>
<td>["josipa", "filipa", "marina", "nikola"]</td>
<td>"vinko"</td>
</tr>
<tr>
<td>["mislav", "stanko", "mislav", "ana"]</td>
<td>["stanko", "ana", "mislav"]</td>
<td>"mislav"</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>예제 #1<br>
"leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.</p>

<p>예제 #2<br>
"vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.</p>

<p>예제 #3<br>
"mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.</p>

<hr>

<p>※ 공지 - 2023년 01월 25일 테스트케이스가 추가되었습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges



## 다른 사람의 풀이 참고

```js
function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    for(let [k, v] of map) {
        if(v > 0) return k;
    }

    return 'nothing';
}
```

1. Map 객체 생성: map이라는 이름의 Map 객체를 생성합니다. 이 Map 객체는 참가자의 이름을 키(key)로, 그 참가자의 등장 횟수(완주하면 감소, 참가하면 증가)를 값(value)으로 저장합니다.

2. 참가자와 완주자 명단 순회: for 루프를 사용하여 참가자 명단(participant)을 순회합니다. 이때, participant와 completion 배열의 각 요소에 접근합니다. 참가자 배열의 길이만큼 루프를 실행합니다. 완주자 명단이 참가자 명단보다 항상 1명 적기 때문에, completion 배열에서는 undefined 값이 map.set에 의해 마지막에 추가될 수 있습니다.

3. Map에 참가자와 완주자 등록: 참가자 이름 a에 대해, 해당 이름이 map에 이미 존재하면 그 값에 1을 더하고, 없으면 1을 설정합니다. 완주자 이름 b에 대해서는 해당 이름의 값에서 1을 빼거나, 이름이 없으면 -1을 설정합니다. 이 과정은 참가자와 완주자의 등장 횟수를 관리합니다.

4. 완주하지 못한 사람 찾기: map을 순회하며 값(v)이 0보다 큰 첫 번째 키(k)를 반환합니다. 값이 0보다 크다는 것은 해당 참가자가 완주하지 못했다는 것을 의미합니다(등장 횟수가 남아있음). 이 키가 완주하지 못한 사람의 이름입니다.

5. 결과 반환: 완주하지 못한 사람이 있으면 그 사람의 이름을 반환하고, 모두 완주했다면 'nothing'을 반환합니다.


