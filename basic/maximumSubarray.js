// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23

var maxSubArray = function(nums) {
    let sum = nums[0];
    let max = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        // if the sum of the subarray is negative we're no longer interested and start the sum again starting at the current value
        sum = Math.max(sum + nums[i], nums[i]);

        // tracks the subarray with the highest sum found
        max = Math.max(sum, max);
    }
    
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));