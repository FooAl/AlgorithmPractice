// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(val){
        let node = new Node(val);
        if(this.size() === 0){
            this.front = node;
            this.back = node;
        }else{
            this.back.next = node;
            this.back = node;
        }

        this.length++;
        return this.size();
    }

    dequeue(){
        const length = this.size();
        if(length === 0){
            return null;
        }
        
        let node = this.front;
        if(length === 1){
            this.front = null;
            this.back = null;
        }else{
            this.front = node.next;
        }
        this.length--;
        return node.value;
    }

    size(){
        return this.length;
    }
}

exports.Node = Node;
exports.Queue = Queue;