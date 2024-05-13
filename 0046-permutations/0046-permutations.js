/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
    const permutations = [];
    
    const dfs = (picked, unpicked) => {
        // 선택되지 않은 값이 없을 때, 지금까지 선택된 숫자들을 넣은 permutations 를 리턴
        if(!unpicked.length) return permutations.push(picked);
   
        // 아직 선택되지 않은 숫자를 대상으로 루프를 돌림
        unpicked.forEach((num, i) => {
            dfs(
            [...picked, num], // 선택된 숫자
            [...unpicked.slice(0, i), ...unpicked.slice(i+1)] // i번째 자리에 있는 숫자만 제외
            );
        })
    }
    
    dfs([], nums);
    
    return permutations;
}