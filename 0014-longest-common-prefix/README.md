<h2><a href="https://leetcode.com/problems/longest-common-prefix/">14. Longest Common Prefix</a></h2><h3>Easy</h3><hr><div><p>Write a function to find the longest common prefix string amongst an array of strings.</p>

<p>If there is no common prefix, return an empty string <code>""</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> strs = ["flower","flow","flight"]
<strong>Output:</strong> "fl"
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> strs = ["dog","racecar","car"]
<strong>Output:</strong> ""
<strong>Explanation:</strong> There is no common prefix among the input strings.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= strs.length &lt;= 200</code></li>
	<li><code>0 &lt;= strs[i].length &lt;= 200</code></li>
	<li><code>strs[i]</code> consists of only lowercase English letters.</li>
</ul>
</div>

<br/>

<p> 💟 나의 풀이 </p>

```js
var longestCommonPrefix = function(strs) {
    let answer = ''; // 빈 문자열 만들기
    
    for(let i=0; i < strs[0].length; i++) {
        let char = strs[0][i]; // char에 첫 번째 단어의 알파벳 하나씩 할당
        
        if(!char) return ''; // 단어가 비어있으면 빈 문자열 리턴
        if(strs.every(str => str[i] === char)) {
            answer += char; // 모든 단어의 인덱스 값이 char와 동일하면 answer에 해당 알파벳 추가
        } else break;
    }
    return answer;
};
```

<br/>

<p> 💟 다른 사람의 풀이 </p>

```js
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }
    let ans = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(ans) !== 0) {
            ans = ans.substring(0, ans.length - 1);
            if (ans === '') {
                return '';
            }
        }
    }
    return ans;
};
```

<p>풀이 링크: https://leetcode.com/problems/longest-common-prefix/discuss/3512602/C++JavaPythonJavaScript-oror-Fully-Explained </p>
<p>이 솔루션의 기본 아이디어는 첫 번째 문자열부터 시작하여 strs를 초기 공통 접두사로 간주하는 것. 그런 다음 나머지 문자열을 반복하고 시작 부분의 현재 문자열에서 공통 접두사가 발견될 때까지 끝에서 문자를 제거하여 공통 접두사를 지속적으로 업데이트해준다. 공통 접두사가 어느 시점에서든 비어 있으면 문자열 사이에 공통 접두사가 없다는 의미이므로 빈 문자열을 반환한다.</p>

<br/>
