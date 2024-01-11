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