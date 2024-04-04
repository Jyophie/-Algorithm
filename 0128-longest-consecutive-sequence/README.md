<h2><a href="https://leetcode.com/problems/longest-consecutive-sequence/">128. Longest Consecutive Sequence</a></h2><h3>Medium</h3><hr><div><p>Given an unsorted array of integers <code>nums</code>, return <em>the length of the longest consecutive elements sequence.</em></p>

<p>You must write an algorithm that runs in&nbsp;<code>O(n)</code>&nbsp;time.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [100,4,200,1,3,2]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The longest consecutive elements sequence is <code>[1, 2, 3, 4]</code>. Therefore its length is 4.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [0,3,7,2,5,8,4,6,0,1]
<strong>Output:</strong> 9
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>
</div>

<p>&nbsp;</p>

## 시도한 풀이

```js
var longestConsecutive = function(nums) {
    nums = nums.sort((a,b) => a-b);
    let tmp = [];
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i]+1 === nums[i+1]){
            tmp.push(nums[i]);
        }
    }
    return tmp.length === 0 ? 0 : tmp[0] === 0 ? 1 : tmp.length+1;
};
```

## 문제점

정렬 복잡도
: 제시된 해결 방안이 배열을 정렬하는 sort() 메소드를 사용하는 것이 첫 번째 문제입니다. 대부분의 자바스크립트 환경에서 정렬 알고리즘의 시간 복잡도는 일반적으로 O(n log n)입니다. 문제 설명에 따르면 알고리즘은 O(n) 시간 내에 실행되어야 합니다. 따라서 배열을 정렬하는 것은 이 시간 복잡도 제약을 위반합니다.

잘못된 길이 계산
: 연속 요소를 tmp 배열에 넣고 그 길이를 확인하는 방식으로 연속 수열의 길이를 계산하는 방법은 모든 경우에 가장 긴 연속 수열의 길이를 정확하게 파악하지 못할 수 있습니다. 이 방법은 동일한 숫자로 시작하고 끝나는 수열을 고려하지 않습니다(nums[i] + 1 === nums[i + 1] 조건 때문에) 그리고 배열 내 중복 가능성을 간과하며, 이는 연속 수열 길이 계산이 잘못될 수 있습니다.

엣지 케이스 처리
: 최종 반환 문에서 일부 엣지 케이스를 처리하려고 시도하지만 모든 경우를 올바르게 처리하지 못합니다. tmp 배열이 비어 있지 않은 경우에만 길이를 +1 해주는 로직은 연속 수열이 중간에 끊길 때를 정확히 처리하지 못합니다.


정확한 O(n) 해법을 위해서는 배열을 정렬하지 않고, 대신 집합(Set)을 사용하여 각 숫자를 한 번씩만 고려하고, 그 숫자가 연속 수열의 시작점인지 확인하는 방식을 사용할 수 있습니다. 각 숫자에 대해, 그 숫자보다 1 작은 숫자가 집합에 없을 때만(즉, 현재 숫자가 연속 수열의 시작점일 때만), 현재 숫자부터 시작하여 집합 내에 연속적으로 존재하는 숫자의 길이를 계산합니다. 이 방식은 각 요소를 한 번씩만 검사하므로 O(n) 복잡도를 만족합니다.
