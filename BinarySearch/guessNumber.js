/**
 *
 * We are playing the Guess Game. The game is as follows:
 *
 * I pick a number from 1 to n. You have to guess which number I picked.
 *
 * Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
 *
 * You call a pre-defined API int guess(int num), which returns three possible results:
 *
 * -1: Your guess is higher than the number I picked (i.e. num > pick).
 * 1: Your guess is lower than the number I picked (i.e. num < pick).
 * 0: your guess is equal to the number I picked (i.e. num == pick).
 * Return the number that I picked.
 *
 *
 *
 * Example 1:
 *
 * Input: n = 10, pick = 6
 * Output: 6
 * Example 2:
 *
 * Input: n = 1, pick = 1
 * Output: 1
 * Example 3:
 *
 * Input: n = 2, pick = 1
 * Output: 1
 *
 *
 * Constraints:
 *
 * 1 <= n <= 231 - 1
 * 1 <= pick <= n *
 *
 *
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return         -1 if num is higher than the picked number
 *                  1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

const guess = num => {
    const pick = 6;
    if (num === pick) {
        return 0;
    }
    if (num > pick) {
        return -1;
    }
    return 1;
}
const guessNumber = function (n) {
    let begin = 1;
    let end = n;
    while (begin <= end) {
        const middle = begin + Math.floor((end - begin) / 2);
        const result = guess(middle);
        if (result === 0) {
            return middle;
        }
        if (result === -1) {
            end = middle - 1;
        } else {
            begin = middle + 1;
        }
    }
};

console.log(guessNumber(1000))