// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".


// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.


var longestCommonPrefix = (strs) => {
    if (!strs.length) return "";

    for (let i = 0; i < strs[0].length; i++)
        if (strs.some((s) => s[i] != strs[0][i]))     // s[i] may be undefined so works
            return strs[0].slice(0, i);

    return strs[0]; 
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
