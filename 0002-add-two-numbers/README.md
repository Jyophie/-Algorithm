<h2><a href="https://leetcode.com/problems/add-two-numbers/">2. Add Two Numbers</a></h2><h3>Medium</h3><hr><div><p>You are given two <strong>non-empty</strong> linked lists representing two non-negative integers. The digits are stored in <strong>reverse order</strong>, and each of their nodes contains a single digit. Add the two numbers and return the sum&nbsp;as a linked list.</p>

<p>You may assume the two numbers do not contain any leading zero, except the number 0 itself.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg" style="width: 483px; height: 342px;">
<pre><strong>Input:</strong> l1 = [2,4,3], l2 = [5,6,4]
<strong>Output:</strong> [7,0,8]
<strong>Explanation:</strong> 342 + 465 = 807.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> l1 = [0], l2 = [0]
<strong>Output:</strong> [0]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
<strong>Output:</strong> [8,9,9,9,0,0,0,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in each linked list is in the range <code>[1, 100]</code>.</li>
	<li><code>0 &lt;= Node.val &lt;= 9</code></li>
	<li>It is guaranteed that the list represents a number that does not have leading zeros.</li>
</ul>
</div>
<br/>

<p> 💟 나의 풀이 </p>

```js
// 배열로 주어지는 거라고 생각하고 계속 reverse(), join()으로 접근하는데 오류가 나서 해결 못함.
// l1, l2는 배열이 아니라 연결 리스트('ListNode' 인스턴스)...
```

<br/>

<p> 💟 다른 사람의 풀이 </p>

```js
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        let sum = carry;
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }

    return dummyHead.next;
};
```

<br/>

<p> 🤔 접근 방식 </p>
<p>- 연결 리스트는 노드들이 연결된 구조, 각 노드는 값(val)과 다음 노드를 가리키는 참조(next)를 지님</p>
<p>- 연결 리스트의 노드를 순회하려면, 시작 노드부터 next를 따라 다음 노드로 이동하며 과정을 반복</p>
<p>- 각 자리수를 더할때 올림 발생하면 올림수는 carry 변수에 저장, 각 자리수 합을 10으로 나눈 나머지로 결정</p>
<p>- l1, l2의 각 노드를 순회하며 값을 더하고, 결과를 새로운 연결 리스트에 저장</p>
<p>- 해당 과정이 완료되면 dummyHead.next가 최종 결과 연결 리스트를 가리킨다.</p>

<br/>
