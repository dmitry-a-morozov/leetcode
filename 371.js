/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    var aBin = a.toString(2)
    var bBin = b.toString(2)
    var aPtr = aBin.length - 1
    var bPtr = bBin.length - 1
    var xs = []
    var carry = '0'
    while (aPtr >= 0 || bPtr >= 0) {
        var aItem = '0', bItem = '0'
        if (aPtr < 0) {
            bItem = bBin[bPtr]
            bPtr--
        }
        else if (bPtr < 0) {
            aItem = aBin[aPtr]
            aPtr--
        }
        else {
            bItem = bBin[bPtr]
            bPtr--
            aItem = aBin[aPtr]
            aPtr--
        }

        switch(aItem.concat(bItem,carry)) {
            case '000': 
                xs.unshift('0')
                break;
            case '100':
            case '010': 
            case '001': 
                xs.unshift('1') 
                carry = '0'
                break;
            case '110': 
            case '101': 
            case '011': 
                xs.unshift('0')
                carry = '1'
                break;
            case '111':
                xs.unshift('1')
                carry = '1'
                break;
        }
    }
    if (carry === '1') xs.unshift('1')
    return Number.parseInt( xs.join(''), 2) 
};

console.log( getSum( 10, 11))
console.log( getSum( 2, 3))
console.log( getSum( 1, 2))

console.log('Done')