/**
Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  /* best time complexity
  ***********************
  const MAX_VALUE = 2147483647;
  const MIN_VALUE = -2147483648;

  const reverse = function(x) {
	  let reverse = 0,
        k = 1,
        lastDigit;

    if (x < 0) {
        k = -1;
        x *=-1;
    }

    while (x !== 0) {
        reverse = (lastDigit = x % 10) + reverse * 10;
        x = (x - lastDigit) / 10;
    }
    
    reverse *= k;
    if (reverse > MAX_VALUE || reverse < MIN_VALUE) return 0;

    return reverse;  
  };
  */
  
  /* best space complexity
  ************************
  var reverse = function(x) {    
    var sign = x<0?-1:1;
    x= Math.abs(x);    
    var left = x;
    var result =0;    
    while(left>0){        
        result =result *10 + (left%10);
        left = Math.floor(left/10);        
    }                
    
    result *=sign;
    if(result> (Math.pow(2,31)-1) || result < Math.pow(-2,31))
        return 0;
    
    return result;        
  };
  */

  var multiplier = x < 0 ? -1 : 1,
    	rev = parseInt(x.toString().split('').reverse().join(''), 10);

  if (rev > (Math.pow(2, 31) - 1) || rev < Math.pow(-2, 31)) return 0;
  return multiplier * rev;
};
