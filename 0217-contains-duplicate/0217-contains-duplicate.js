/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let result=new Set(nums)
    return result.size!==nums.length
}