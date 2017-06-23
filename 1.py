class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        if len(nums) < 2:
            return []
        
        existing = {}

        for i in range( len( nums)):
            complement = target - nums[i]
            if complement in existing: 
                return [ existing[complement], i ]
            else:
                existing[nums[i]] = i

        return []
        
assert( Solution().twoSum([2, 7, 11, 15], 9 ) == [0, 1] )
print "Done !"