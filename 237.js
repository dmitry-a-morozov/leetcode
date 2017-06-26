// @ts-check

 class ListNode { 
     constructor(val, next) {
         this.val = val
         this.next = next
     }

 } 

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
};

console.log('Done !')