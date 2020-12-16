class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.head) {
            return undefined;
        } else {
            let current = this.head;
            let newTail = current;
            while (current.next) {
                newTail = current;
                current = current.next;
            } 
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
            if (this.length === 0) {
                this.head = null;
                this.tail = null;
            }
            return current;
        }
    }
    shift() {
        if(!this.head) {
            return undefined;
        } else {
            let current = this.head;
            this.head = current.next;
            this.length--;
            if (this.length === 0) {
                this.head = null;
                this.tail = null;
            }
            return current;
        }
    }
    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        } 
        this.length++;
        return this;
    }
    
    traverse() {
        console.log(`--------------------`)
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
}

const list = new SinglyLinkedList();
list.push("prashant");
list.push("shrikant");
list.push("usha")
list.push("shweta")
list.traverse();
list.pop();
list.traverse();
list.shift();
list.traverse();
list.unshift("mac");
list.traverse();
const nodeVal = list.get(2)
console.log(nodeVal);
