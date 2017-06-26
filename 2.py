class ListNode(object):
    def __init__(self, x, next = None):
        self.val = x
        self.next = next

    def asSeq(self):
        x = self
        while x is not None:
            yield x.val
            x = x.next

class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """


        
l = ListNode(12, ListNode(3))
xs = l.asSeq()
# print "output" list(l)