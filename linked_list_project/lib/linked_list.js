// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        this.length++;
        let node = new Node(val);
        if(this.tail === null){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if(this.tail === null) return undefined;

        let oldTail = this.tail;
        if(this.length === 1){
            this.tail = null;
            this.head = null;
            this.length = 0;
        }else{
            let nextTail = this.head;
            for(let i = 1; i < this.length - 1; i++){
                nextTail = this.head.next;
            }
            nextTail.next = null;
            this.tail = nextTail;
            this.length--;
        }
        return oldTail;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let node = new Node(val);
        if(this.head === null){
            this.head = node;
            this.tail = node;
            this.length++;
        }else{
            let oldHead = this.head;
            this.head = node;
            this.head.next = oldHead;
            this.length++;
        }
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if(this.length === 0) return undefined;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length = 0;
        }else{
            let newHead = this.head.next;
            let oldHead = this.head;
            this.head = newHead;
            this.length--;
            return oldHead;
        }
    }

    // TODO: Implement the contains method here
    contains(target) {
        let node = this.head;
        for(let i = 0; i < this.length; i++){
            if(target === node.value){
                return true;
            }else{
                node = node.next;
            }
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if(index > this.length) return null;
        let node = this.head;
        for(let i = 0; i < index; i++){
            node = node.next;
        }
        return node;
    }

    // TODO: Implement the set method here
    set(index, val) {
        let node = this.head;
        for(let i = 0; i < index; i++){
            node = node.next;
        }
        if(node === null) return false;
        node.value = val;
        return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if(index >= this.length) return false;
        let newNode = new Node(val);
        let node = this.head;
        for(let i = 1; i < index; i++){
            node = node.next;
        }
        let nextNode = node.next;
        node.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if(index >= this.length) return undefined;
        let node = this.head;
        let prevNode = this.head;
        for(let i = 0; i < index; i++){
            prevNode = node;
            node = node.next;
        }
        prevNode.next = node.next;
        this.length--;
        return node;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
