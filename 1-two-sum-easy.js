/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

function twoSum(nums, target) {
  var myMap = new Map(),
  		i = 0,
      j = 0;

  for (i = 0; i < nums.length; i++) {
    myMap.set(nums[i], i);
  }

  for (j = 0; j < nums.length; j++) {
    var complement = target - nums[j];

    if (myMap.has(complement) && myMap.get(complement) != j) {
       return [j, myMap.get(complement)];
    }
  }
  
  return 'No two sum solution';
}

var arr = [2, 7, 11, 15],
  target = 30;

console.log(twoSum(arr, target));
