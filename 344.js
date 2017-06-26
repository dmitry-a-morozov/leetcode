/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    if (s === null || s === '') return s 
    var xs = Array.from(s)
    var head = 0, tail = s.length -1; 
    while(head < tail) {
        var tmp = xs[head]
        xs[head] = xs[tail]
        xs[tail] = tmp
        head++
        tail--
    }
    return xs.join('')
};

console.assert( reverseString( 'hello') === 'olleh' )

console.log('Done !')


