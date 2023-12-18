<h2><a href="https://leetcode.com/problems/counting-bits/">338. Counting Bits</a></h2><h3>Easy</h3><hr><div><p>Given an integer <code>n</code>, return <em>an array </em><code>ans</code><em> of length </em><code>n + 1</code><em> such that for each </em><code>i</code><em> </em>(<code>0 &lt;= i &lt;= n</code>)<em>, </em><code>ans[i]</code><em> is the <strong>number of </strong></em><code>1</code><em><strong>'s</strong> in the binary representation of </em><code>i</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> n = 2
<strong>Output:</strong> [0,1,1]
<strong>Explanation:</strong>
0 --&gt; 0
1 --&gt; 1
2 --&gt; 10
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> n = 5
<strong>Output:</strong> [0,1,1,2,1,2]
<strong>Explanation:</strong>
0 --&gt; 0
1 --&gt; 1
2 --&gt; 10
3 --&gt; 11
4 --&gt; 100
5 --&gt; 101
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= n &lt;= 10<sup>5</sup></code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong></p>

<ul>
	<li>It is very easy to come up with a solution with a runtime of <code>O(n log n)</code>. Can you do it in linear time <code>O(n)</code> and possibly in a single pass?</li>
	<li>Can you do it without using any built-in function (i.e., like <code>__builtin_popcount</code> in C++)?</li>
</ul>
</div>
<br/>

<p> 💟 나의 풀이 </p>

```js
// 실패한 풀이 : n까지의 숫자를 2진수로 변환 -> 각 숫자를 split 하여 해당 문구에 1이 있는 만큼 cnt를 증가시키고 빈 배열에 추가하는 방식을 시도했는데 ㅠ 답이 틀리네요.
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let arr = [];
    let res = [];
    let cnt = 0;
    
    for(let i = 0; i <= n; i++){
        arr.push(i.toString(2));
    }
    for(let i = 0; i < arr.length; i++){
        tmp = arr[i].split('');
        for(let j = 0; j < tmp.length; j++){
            if(tmp[j] === '1'){
                cnt++;
            }
        }
        res.push(cnt);
    }
    return res;
};
```

<br/>

<p> 💟 다른 사람의 풀이 </p>

```js
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    var dp = new Array(n + 1).fill(0);
    var sub = 1;

    for (var i = 1; i <= n; i++) {
        if (sub * 2 === i) {
            sub = i;
        }

        dp[i] = dp[i - sub] + 1;
    }

    return dp;    
};
```

<br/>

<p> 🤔 접근 방식 </p>
<p>Array.fill을 사용해서 dp로 푸는 방식으로 하니 간단하게 풀이가 되네요 🥹 </p>

<br/>
