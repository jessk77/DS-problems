// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

const singleNumber = (nums) => {
    let results = {};
    for(let i=0; i<=nums.length; i++){
        if(results[nums[i]]){
            delete results[nums[i]];
        }
        else{
            results[nums[i]]=true;
        }
    }
    return Object.keys(results)[0];
};

console.log(singleNumber([4,1,2,1,2]));