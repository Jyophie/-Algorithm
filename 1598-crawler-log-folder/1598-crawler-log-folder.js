/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let count = 0;
    let location = 0;
    
    for(let log of logs){
        if(log === "../" && location !== 0){
            count --;
            location --;
        } else if(log === "../" && location === 0){
            count = count;
        } else if(log === "./"){
            continue;
        } else {
            count ++;
            location ++;
        }
    }
    
    return count;
};