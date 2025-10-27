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
     * @param {ListNode} head
     * @return {boolean}
     */
  hasCycle(head) {
        let map = new Set();
        let current = head;
        while (current) {
            if (map.has(current)) {
                return true;
            }
            map.add(current);
            current = current.next;
        }
        return false;
    }
}