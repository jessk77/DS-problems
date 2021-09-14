//Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// Example 1:
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: l1 = [], l2 = []
// Output: []

// Example 3:
// Input: l1 = [], l2 = [0]
// Output: [0]

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const mergeTwoLists = (l1, l2) => {
  let mergedList = new ListNode();
  let head = mergedList;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      mergedList.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      mergedList.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    mergedList = mergedList.next;
  }

  //if one of the list is large than other
  if (l1 !== null) mergedList.next = l1;
  if (l2 !== null) mergedList.next = l2;

  return head.next;
};
