/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var xs = new Set()
    for(var x of nums) {
        if (xs.has(x)) {
            xs.delete(x)
        }
        else {
            xs.add(x)
        }
    }
    return xs.values().next().value
};


console.log( singleNumber([ 2, 4, 4, 5, 2 ]))

console.log('Done !')
