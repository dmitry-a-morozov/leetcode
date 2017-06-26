/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var merged = []
    var first = 0, second = 0
    while (first < nums1.length || second < nums2.length) {
        if (first === nums1.length) {
            merged.push(nums2[second])
            second++
        }
        else if (second === nums2.length){
            merged.push(nums1[first])
            first++
        }
        else {
            if (nums1[first] < nums2[second]) {
                merged.push(nums1[first])
                first++
            }
            else {
                merged.push(nums2[second])
                second++
            }
        }
    }
    const middle = Math.floor( merged.length / 2 )
    if (merged.length % 2 === 0) {
        return (merged[middle - 1] +  merged[middle])/2
    } 
    else {
        return merged[middle] 
    }
};

console.assert( findMedianSortedArrays( [1, 3], [2]) === 2)
console.assert( findMedianSortedArrays( [1, 2], [3, 4]) === 2.5)

console.log('Done !')