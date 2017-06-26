// @ts-check

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s === null || s === "") return 0

    var i = 0, 
        max = 1

    var currentSet = new Map()
    while (i < s.length) {
        var c = s[i]
        if ( currentSet.has( c)) {
            max = Math.max( max, currentSet.size) 
            i = currentSet.get(c) + 1
            currentSet.clear()
        }
        else {
            currentSet.set(s[i], i)
            i++
        }
    }

    return Math.max( max, currentSet.size)
};

console.assert( lengthOfLongestSubstring( 'dvdf') === 3)
console.assert( lengthOfLongestSubstring( 'au') === 2)
console.assert( lengthOfLongestSubstring( 'abcabcbb') === 3)
console.assert( lengthOfLongestSubstring( 'bbbbb') === 1)
console.assert( lengthOfLongestSubstring( 'pwwkew') === 3)

console.log('Done !')