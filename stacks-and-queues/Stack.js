class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.size = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.size;
    }
    pop() {
        if (!this.first) return null;
        let temp = this.first;
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

const stack = new Stack();
stack.push('prashant');
stack.push('shrikant')
console.log(stack)