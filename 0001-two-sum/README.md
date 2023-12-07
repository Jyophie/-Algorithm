<h2><a href="https://leetcode.com/problems/two-sum/">1. Two Sum</a></h2><h3>Easy</h3><hr><div><p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>

<p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>

<p>You can return the answer in any order.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [2,7,11,15], target = 9
<strong>Output:</strong> [0,1]
<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [3,2,4], target = 6
<strong>Output:</strong> [1,2]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> nums = [3,3], target = 6
<strong>Output:</strong> [0,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>
	<li><strong>Only one valid answer exists.</strong></li>
</ul>

<p>&nbsp;</p>
<strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than <code>O(n<sup>2</sup>)</code><font face="monospace">&nbsp;</font>time complexity?</div>


<br/>

<p> 💟 나의 풀이 </p>

```js
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j < nums.length; j++){
            if(i < j){
                if (nums[i] + nums[j] === target){
                return [i, j];
                }   
            }
        }
    }
};
```

<br/>

<p> 💟 다른 사람의 풀이 </p>

```js
var twoSum = function(nums, target) {
    let hashMap = new Map();

    for(let i = 0; i < nums.length; i++) {
        let neededNumber = target - nums[i];

        if(hashMap.has(neededNumber)) {
            return [i, hashMap.get(neededNumber)];
        } 
        hashMap.set(nums[i], i);

    }
};
```
<br/>

<p> 🤔 접근 방식 </p>
<p>해시맵? 키, 값 쌍의 집합을 의미</p>
<p>1. 빈 해시맵 변수를 선언</p> 
<p>2. for문으로 전체 배열 반복, 타겟에서 해당 숫자를 빼 필요한 나머지 숫자를 변수로 정의 </p>
<p>3. 해시맵에 해당 나머지 숫자가 있는지 찾고, 있으면 [해당 숫자 인덱스, 찾는 나머지 숫자를 제공하는 배열 요소의 인덱스] 반환</p>
<p>4. 충족하지 않으면 단순히 숫자와 인덱스를 해시맵에 저장.</p>

<br/>
