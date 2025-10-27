/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
//Here i am creating an empty place holder node for the two lists to be merged into
   
const tempNode = new ListNode(null)

let previousNode = tempNode

//This while loop is saying while both lists are not empty if the value in list one is less than or equal to that of list 2,the next node in our new list will be come the lesser value and vice-versa

while(list1 && list2){
    
    if(list1.val <= list2.val){
        previousNode.next = list1
        list1 = list1.next
        }else{
            previousNode.next = list2
            list2 = list2.next
        }
        previousNode = previousNode.next

        }
        //These conditionals are checking to see whether the list has any remaining nodes left by determining if the value is null
        if(list1) previousNode.next = list1
        if(list2) previousNode.next = list2

        return tempNode.next

    }
    
}
