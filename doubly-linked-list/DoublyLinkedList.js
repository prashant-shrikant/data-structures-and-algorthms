class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length =  0;
    }
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        } this.length++;
        return this;
    } 
    pop() {
        if (!this.tail) { return undefined; }
        const oldTail = this.tail;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            const previous = this.tail.previous;
            previous.next = null;
            this.tail.previous = null;
            this.tail = previous;
        }
        this.length--;
        return oldTail;
    }
    shift() {
        if (!this.head) { return undefinded; }
        const oldHead = this.head;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            const nextNode = this.head.next;
            nextNode.previous = null;
            this.head.next = null;
            this.head = nextNode;
        }
        this.length--;
        return oldHead;
    }
}

const list = new DoubleLinkedList();
list.push('prashant')
list.push('shikant')
console.log(list.shift());
console.log(list)