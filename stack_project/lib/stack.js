// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
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

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(val){
        let node = new Node(val);
        if(this.top === null){
            this.top = node;
            this.bottom = node;
        }else{
            node.next = this.top;
            this.top = node;
        }
        this.length++;
        return this.size();
    }

    pop(){
        if(this.top === null) return null;
        let node = this.top;
        if(this.size() === 1){
            this.top = null;
            this.bottom = null;
        }else{
            this.top = node.next;
        }
        this.length--;
        return node.value;        
    }

    size(){
        return this.length;
    }
}

exports.Node = Node;
exports.Stack = Stack;
