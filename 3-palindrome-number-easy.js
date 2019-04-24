/**
 * @param {number} x
 * @return {number}
 */
var isPalindrome = function(num) {
if (num < 0 || (num % 10 == 0 && num != 0)) {
    return false;
  }

  var rev_num = 0,
  num_ref = num,
    step = 1;
  while (num > 0) {
    rev_num = rev_num * 10 + num % 10;
    num = Math.floor(num / 10);
  }

  return num_ref === rev_num;
};

/* BEST TIME COMPLEXITY
***********************
var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    if(x<10){
        return true;
    }
    var d=[];
    while(x>0){
        var n=x%10;
        d.push(n);
        x=x-n;
        x=x/10;
    }
    for(var i=0;i<d.length/2;i++){
        if(d[i]!=d[d.length-1-i]){
            return false;
        }
    }
    return true;
};
*/

/* BEST SPACE COMPLEXITY
***********************
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    let copy = x;
    let reverse = 0;
    while (copy > 0) {
        reverse = reverse * 10 + copy % 10;
        copy = Math.floor(copy / 10);
    }
    return x === reverse;
};
*/
