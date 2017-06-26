// @ts-check

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var result = 0;

    var digits = new Map()
    digits.set('V', { value: 5, backtrack: 'I', reduceBy: 1 })
    digits.set('X', { value: 10, backtrack: 'I', reduceBy: 1 })
    digits.set('L', { value: 50, backtrack: 'X', reduceBy: 10 })
    digits.set('C', { value: 100, backtrack: 'X', reduceBy: 10 })
    digits.set('D', { value: 500, backtrack: 'C', reduceBy: 100 })
    digits.set('M', { value: 1000, backtrack: 'C', reduceBy: 100 })
 
    for(var i = s.length - 1; i >= 0; i--) {
        if (s[i] === 'I') {
            result++
        }
        else {
            var item = digits.get(s[i])
            result += item.value
            if (i > 0 && s[i-1] === item.backtrack ) {
                result -= item.reduceBy
                i--
            } 
        }
    }

    return result;
};

console.assert( romanToInt('I') === 1)
console.assert( romanToInt('IV') === 4)
console.assert( romanToInt('V') === 5)

console.assert( romanToInt('VII') === 7)

console.assert( romanToInt('X') === 10)
console.assert( romanToInt('XIII') === 13)
console.assert( romanToInt('IX') === 9)

console.assert( romanToInt('XL') === 40)
console.assert( romanToInt('XC') === 90)
console.assert( romanToInt('CD') === 400)
console.assert( romanToInt('CM') === 900)

console.log('Done !')