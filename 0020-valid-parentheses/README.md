<h2><a href="https://leetcode.com/problems/valid-parentheses/">20. Valid Parentheses</a></h2><h3>Easy</h3><hr><div><p>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p>

<p>An input string is valid if:</p>

<ol>
	<li>Open brackets must be closed by the same type of brackets.</li>
	<li>Open brackets must be closed in the correct order.</li>
	<li>Every close bracket has a corresponding open bracket of the same type.</li>
</ol>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> s = "()"
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> s = "()[]{}"
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> s = "(]"
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>
	<li><code>s</code> consists of parentheses only <code>'()[]{}'</code>.</li>
</ul>
</div>


<br/>

# 💟 나의 풀이

```js
/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    let arr = [];
    
    for(let str of s){
        if (str === '(' || str === '[' || str === '{') {
            arr.push(str);
        } else {
            if (arr.length === 0 || 
                (str ===')' && arr[arr.length-1] !== '(') || 
                (str ===']' && arr[arr.length-1] !== '[') || 
                (str ==='}' && arr[arr.length-1] !== '{')) {
                return false;
            }
            arr.pop();
        }
    }
    return !arr.length;
};
```

<br/>

# 💟 다른 사람의 풀이

```js
/**
 * @param {string} s
 * @return {boolean}
 */

const pairs = {
    "(": ")",
    "[": "]",
    "{": "}"
}
     
var isValid = function(s) {
    
    if (s.length % 2 === 1) return false

    if (s[0] === "]" || s[0] === ")" || s[0] === "}") return false
 
    if (s[s.length - 1] === "[" || s[s.length - 1] === "(" || s[s.length - 1] === "{") return false
    
    let stack = []
    
    for(let i=0; i<s.length; i++) {
        if(s[i] === "[" || s[i] === "(" || s[i] === "{") {
            stack.push(s[i])
        } else if (pairs[stack.pop()] !== s[i]) {
            return false
        }
        
    }
    return stack.length === 0
    
};
```

<br/>

# 🤔 접근 방식
- 먼저 길이가 홀수일 경우 false 반환
- 처음 요소가 닫는 괄호인 경우 false 반환
- 마지막 요소가 여는 괄호인 경우 false 반환
- 여는 괄호인 경우 스택에 밀어 넣고, 아니라면 닫는 괄호로 가정하고 일치 항목이 있는지 확인한다.

<br/>
