<h2><a href="https://leetcode.com/problems/coin-change/">322. Coin Change</a></h2><h3>Medium</h3><hr><div><p>You are given an integer array <code>coins</code> representing coins of different denominations and an integer <code>amount</code> representing a total amount of money.</p>

<p>Return <em>the fewest number of coins that you need to make up that amount</em>. If that amount of money cannot be made up by any combination of the coins, return <code>-1</code>.</p>

<p>You may assume that you have an infinite number of each kind of coin.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> coins = [1,2,5], amount = 11
<strong>Output:</strong> 3
<strong>Explanation:</strong> 11 = 5 + 5 + 1
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> coins = [2], amount = 3
<strong>Output:</strong> -1
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> coins = [1], amount = 0
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= coins.length &lt;= 12</code></li>
	<li><code>1 &lt;= coins[i] &lt;= 2<sup>31</sup> - 1</code></li>
	<li><code>0 &lt;= amount &lt;= 10<sup>4</sup></code></li>
</ul>
</div>

<br/>

## 💟 다른 사람의 풀이

```js
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

const coinChange = (coins, amount) => {
    const dp = Array(amount + 1).fill(Infinity); // This arr tells us how many coins we need for each amount.
    dp[0] = 0; // To make 0, we need 0 coins.

    for (let coin of coins) { // Check each coin
        for (let i = coin; i <= amount; i++) { // Iterate through the entire amount from coin
            dp[i] = Math.min(dp[i], dp[i - coin] + 1); // Update minimum number of needed coins.
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]; // If the last element is Infinity, then we cannot make the amount.
};
```

<br/>

## 🤔 접근 방식

1. **동적 프로그래밍 배열 (`dp`)**
   - `dp`는 각 인덱스 `i`가 금액 `i`를 만들기 위해 필요한 최소 동전 수를 나타내는 배열입니다.
   - 처음에는 모든 값을 무한대로 초기화합니다. 이는 어떤 금액도 아직 계산되지 않았음을 나타냅니다.
   - `dp[0] = 0`으로 설정하는 이유는 0원을 만드는 데는 동전이 필요 없기 때문입니다.

2. **동전 별로 순회**
   - 주어진 동전들(`coins`)을 하나씩 순회합니다.
   - 각 동전에 대해, 그 동전의 금액부터 목표 금액(`amount`)까지의 모든 금액에 대해 계산을 수행합니다.

3. **최소 동전 수 업데이트**
   - 이중 반복문을 사용하여 각 금액에 대해 최소 동전 수를 계산합니다.
   - `dp[i] = Math.min(dp[i], dp[i - coin] + 1);`는 현재 금액 `i`를 만들기 위한 최소 동전 수를 업데이트합니다. 여기서 `dp[i - coin] + 1`은 현재 동전을 하나 사용하여 금액 `i`를 만드는 경우의 동전 수를 의미합니다.

4. **결과 반환**
   - 마지막으로, `dp[amount]`를 확인하여 해당 금액을 만들 수 있는지 확인합니다.
   - `dp[amount]`가 무한대라면, 주어진 동전으로는 해당 금액을 만들 수 없음을 의미하므로 `-1`을 반환합니다.
   - 그렇지 않다면, `dp[amount]`에 저장된 최소 동전 수를 반환합니다.

<br/>
