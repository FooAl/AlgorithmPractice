// ============================================================================
// Interview Problem: Linked List Intersection
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Write a function linkedListIntersection that returns the node at which the 
// intersection of two linked lists begins, or null if there is no such 
// intersection.
//
// ---------- 
// Example 1:
// ----------
// 
// Given the following two linked lists, list1 and list2, 
// linkedListIntersection(list1,list2) should return D 
// as the node of intersection.
// 
//    A → B → C
//             ↘
//               D → E → F
//             ↗
//        X → Y
//
// ---------- 
// Example 2:
// ----------
//
// Given the following two linked lists, list1 and list2, 
// linkedListIntersection(list1, list2) should return null 
// as there is no point of intersection.
// 
//    A → B → C → D
//
//    X → Y → Z
// 
// -----------
// Let's code!
// -----------
function linkedListIntersection(list1, list2) {
  // TODO: Implement the hasCycle function!
  let h1 = list1.head, h2 = list2.head;
  let head1 = h1, head2 = h2;
  while(head1 !== head2){
    head1 = head1 == null ? h2 : head1.next;
    head2 = head2 == null ? h1 : head2.next;
  }
return head1;

  // const length = list1.length > list2.length ? list1.length : list2.length;
  // let nodes = [list1.head, list2.head];
  // const storage = [];
  // for(let i = 1; i < length; i++){
  //   for(let k = 0; k < 2; k++){
  //     if(nodes[k]){
  //       if(nodeSeen(storage, nodes[k]) === false){
  //         storage.push(nodes[k]);
  //         nodes[k] = nodes[k].next;
  //       }else{
  //         return nodes[k];
  //       }
  //     }
  //   }
  // }
  // return null;
}

// function nodeSeen(array, node){
//     for(let i = 0; i < array.length; i++){
//       if(array[i] === node) return true;
//     }
//     return false;
// }

// ----------------------------------------
// Given: Singly Linked List - Do Not Edit!
// ----------------------------------------
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
}

// --------------------------------------
// Helper For Testing Only - Do Not Edit!
// --------------------------------------
var stringify = function(list) {
  var result = [];
  while(list !== null) {
    result.push(list.value);
    list = list.next;
  }
  return result.join("");
}

exports.Node = Node;
exports.LinkedList = LinkedList;
exports.linkedListIntersection = linkedListIntersection;
exports.stringify = stringify;
