/**
 * There is an integer array nums sorted in ascending order (with distinct values).
 *
 * Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length)
 * such that the resulting
 * array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
 *
 * For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 *
 * Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 *
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 * Example 2:
 *
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
 * Example 3:
 *
 * Input: nums = [1], target = 0
 * Output: -1
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 5000
 * -104 <= nums[i] <= 104
 * All values of nums are unique.
 * nums is an ascending array that is possibly rotated.
 * -104 <= target <= 104
 *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    if (nums.length === 1) {
        return nums[0] === target ? 0 : -1;
    }

    let leftIndex = 0;
    let rightIndex = nums.length - 1;

    while (leftIndex <= rightIndex) {

        let middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
        if (nums[middleIndex] === target) {
            return middleIndex;
        }

        if (nums[leftIndex] <= nums[middleIndex]) {
            // left side is sorted in ascending order
            if (nums[leftIndex] <= target && target <= nums[middleIndex]) { // target is in the left side
                rightIndex = middleIndex - 1;
            }
            else {
                leftIndex = middleIndex + 1;
            }
        }else {
            if (nums[middleIndex] <= target && target <= nums[rightIndex]) {
                leftIndex = middleIndex + 1;
            }
            else {
                rightIndex = middleIndex - 1;
            }
        }
    }
    return -1
};

console.log(search([5,1,3], 0))