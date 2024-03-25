/**
 *
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search
 * target in nums. If target exists, then return its index. Otherwise, return -1.
 * *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 *
 * Example 1:
 *
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 * Example 2:
 *
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 104
 * -104 < nums[i], target < 104
 * All the integers in nums are unique.
 * nums is sorted in ascending order.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    while (leftIndex <= rightIndex) {
        let middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
        if (nums[middleIndex] === target) {
            return middleIndex;
        }
        /**
         * If the target is less than the middle element, then the target must be in the left subarray.
         */
        if (nums[middleIndex] < target) {
            leftIndex = middleIndex + 1;
        }
        /**
         * If the target is greater than the middle element, then the target must be in the right subarray.
         */
        else{
            rightIndex = middleIndex - 1;
        }
    }
    return -1;
};
console.log(search([-1,0,3,5,9,12],9))