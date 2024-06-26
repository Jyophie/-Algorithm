/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    var odd = 0;
    var even = 0;
    position.map((x) => (x % 2 ? (odd += 1) : (even += 1)));
    return Math.min(odd, even);
};