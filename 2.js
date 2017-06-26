// @ts-check

 class ListNode { 
     constructor(val, next) {
         this.val = val
         this.next = next
     }

     print(){
        var head = this.next
        var xs = [ this.val ]
        while (head !== null) {
            xs.push
            head = head.next
        }
        return xs.join(',')
     }
 } 
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var carryForward = 0
    var head = null, tail = null
    while (l1 !== null || l2 !== null) {
        var n1 = 0, n2  = 0
        if (l1 !== null) {
            n1 = Number.parseInt(l1.val)
            l1 = l1.next
        }
         if (l2 !== null) {
            n2 = Number.parseInt(l2.val)
            l2 = l2.next
        }
        var next = new ListNode( (n1 + n2 + carryForward) % 10, null)
        if (head === null) {
            head = next
        }
        else {
            tail.next = next 
        }
        tail = next
        carryForward = Math.floor( (n1 + n2 + carryForward) / 10)
    }
    if (carryForward > 0) {
        tail.next = new ListNode( carryForward, null)
    }
    return head
};

var x = new ListNode('2', new ListNode('4', new ListNode('3', null)))
var y = new ListNode('5', new ListNode('6', new ListNode('4', null)))
console.log( addTwoNumbers(x, y).print())

x = new ListNode('5', null)
y = new ListNode('5', null)
console.log( addTwoNumbers(x, y).print())

console.log('Done !')