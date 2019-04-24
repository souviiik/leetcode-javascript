/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

function twoSum(nums, target) {
  /* best space optimized - 33504 kb
  **********************************
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    let difference = target - currentNum;

    if (nums.includes(difference) && nums.indexOf(difference) != i) {
      return [i, nums.indexOf(difference)];
    }
  }
  */
  
  /* best time optimized - 56 ms
  ******************************
  const map = {};
  for (let i=0; i<nums.length-1; i++) {
    map[target-nums[i]] = i;
    if (nums[i+1] in map) {
      return [map[nums[i+1]], i+1];
    }
  }
  */
  
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
  target = 30,
  target1 = 9,
  target2 = 18,
  target3 = 26;

console.log(twoSum(arr, target));
console.log(twoSum(arr, target1));
console.log(twoSum(arr, target2));
console.log(twoSum(arr, target3));
