/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let arr = [];
    let res = [];
    
    for(let i = 0; i <= n; i++){
        arr.push(i.toString(2));
    }
    for(let i = 0; i < arr.length; i++){
        tmp = arr[i].split('');
        let cnt = 0;
        
        for(let j = 0; j < tmp.length; j++){
            if(tmp[j] === '1'){
                cnt++;
            }
        }
        res.push(cnt);
    }
    return res;
};