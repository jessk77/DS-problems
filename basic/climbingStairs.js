// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:
// 1 <= n <= 45

const climbStairs = function(n) {
    // base cases
    if(n <= 0) return 0;
    if(n === 1) return 1;
    if(n === 2) return 2;
    
    let one_step_before = 2;
    let two_steps_before = 1;
    let ways = 0;
    
    for(let i=2; i<n; i++){
    	ways = one_step_before + two_steps_before;
    	two_steps_before = one_step_before;
        one_step_before = ways;
    }
    return ways;
};

//Found this interesting solution
// var arr = [];
//     arr[0]=0;
//     arr[1]=1;
//     arr[2]=2;
//     for(var i=3;i<=n;i++){
//         arr[i]=arr[i-1]+arr[i-2];
//     }
//     return arr[n];

console.log(climbStairs(5));