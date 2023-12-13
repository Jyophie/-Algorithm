<h2><a href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock/">121. Best Time to Buy and Sell Stock</a></h2><h3>Easy</h3><hr><div><p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.</p>

<p>You want to maximize your profit by choosing a <strong>single day</strong> to buy one stock and choosing a <strong>different day in the future</strong> to sell that stock.</p>

<p>Return <em>the maximum profit you can achieve from this transaction</em>. If you cannot achieve any profit, return <code>0</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> prices = [7,1,5,3,6,4]
<strong>Output:</strong> 5
<strong>Explanation:</strong> Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> prices = [7,6,4,3,1]
<strong>Output:</strong> 0
<strong>Explanation:</strong> In this case, no transactions are done and the max profit = 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= prices.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= prices[i] &lt;= 10<sup>4</sup></code></li>
</ul>
</div>

<br/>

<p> 💟 나의 풀이 </p>

```js
// 에러 케이스 발생해서 해결 못했어요 ㅠㅠ

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profits = [];
    let i = 0;
    
    for(let j = 1; j < prices.length; j++){
        if (prices[i] < prices[j]) {
            profits.push(prices[j] - prices[i]);
        } else {
            i++;
        }
    }
    
    return (profits.length !== 0) ? Math.max(...profits) : 0;
};
```

<br/>

<p> 💟 다른 사람의 풀이 </p>

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let buy = prices[0] 
   let maxProfit = 0;
   for(let i=0; i<prices.length; i++) {
     if(prices[i]-buy > maxProfit) {
         maxProfit = prices[i]-buy
     }
     if(prices[i] < buy) {
         buy = prices[i]
     }
   }
   return maxProfit
};
```

<br/>

<p> 🤔 접근 방식 </p>
<p>maxProfit에 계속 새로운 이익 결과 값을 넣고 비교해서 도출하는 방식으로 접근</p>
<p>저는 profits가 날 수 있는 케이스는 배열로 모두 계산하고 profits가 나는 케이스면 length가 0이 아니므로 Math.max로 최대 이익값 반환하게 한건데, 어디가 문제인걸까요?</p>

<br/>
