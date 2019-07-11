// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val){
        this.value = val;
        this.next = null;
    }

}

class Stack {
    // TODO: Implement the Stack class!
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(val){
        let node = new Node(val.value);
        if(!this.top){
            this.top = node;
            this.bottom = node;
            this.length++;
        }else{
            node.next = this.top;
            this.top = node;
            this.length++;
        }
        return this.size();
    }

    pop(){
        if(!this.top){
            return null;
        }
        const node = this.top;
        if(this.size() === 1){
            this.top = null;
            this.bottom = null;
            this.length--;
        }else{
            this.top = this.top.next;
            this.length--;
        }
        return node;
    }

    size(){
        return this.length;
    }

}

class StackQueue {
    // TODO: Implement the StackQueue class!
    constructor(){
        this.inStack = new Stack();
        this.outStack = new Stack();
        this.front = null;
        this.back = null;
    }

    enqueue(){

    }

    dequeue(){

    }

    size(){
        return this.inStack.size();
    }
}

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
