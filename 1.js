// @ts-check

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    console.assert( nums.length >= 2)
    var xs = nums.map((val, i) => [val, i]).sort(([v1, i1], [v2, i2]) => v1 - v2)
    
    var headIndex = 0, tailIndex = xs.length - 1
    while(headIndex < tailIndex) {
        var headVal = xs[headIndex][0]
        var tailVal = xs[tailIndex][0]
        if (headVal + tailVal === target) {
            return [ xs[headIndex][1], xs[tailIndex][1] ]
        }
        else if (headVal + tailVal > target) {
            tailIndex--
        }
        else {
            headIndex++
        }

    }
    return []
};

console.assert( twoSum( [2, 7, 11, 15], 9).toString() === [0, 1].toString() )

console.assert( twoSum( [3,2,4], 6).toString() === [1, 2].toString() )

console.log('Done !')