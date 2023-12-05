<h2><a href="https://leetcode.com/problems/palindrome-number/">9. Palindrome Number</a></h2><h3>Easy</h3><hr><div><p>Given an integer <code>x</code>, return <code>true</code><em> if </em><code>x</code><em> is a </em><span data-keyword="palindrome-integer"><em><strong>palindrome</strong></em></span><em>, and </em><code>false</code><em> otherwise</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> x = 121
<strong>Output:</strong> true
<strong>Explanation:</strong> 121 reads as 121 from left to right and from right to left.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> x = -121
<strong>Output:</strong> false
<strong>Explanation:</strong> From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> x = 10
<strong>Output:</strong> false
<strong>Explanation:</strong> Reads 01 from right to left. Therefore it is not a palindrome.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>-2<sup>31</sup>&nbsp;&lt;= x &lt;= 2<sup>31</sup>&nbsp;- 1</code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Could you solve it without converting the integer to a string?</div>

<br/>

<p> 💟 나의 풀이 </p>

```js
var isPalindrome = function(x) {

    var result = Number(String(x).split('').reverse().join(''))

    if (result == x){
        return true
    } else {
        return false
    }
    
};
```

<br/>

<p> 💟 다른 사람의 풀이 </p>

```js
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }
  let t = 0;
  while (x > t) {
    t = t * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return t == x || x == Math.floor(t / 10);
};
```

<p>string으로 변환하지 않고 수학으로만 푸는 풀이 방식.</p>

<br/>
