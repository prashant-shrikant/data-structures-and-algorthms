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
            const nextNode = oldHead .next;
            nextNode.previous = null;
            oldHead.next = null;
            this.head = nextNode;
        }
        this.length--;
        return oldHead;
    }
    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 ||  index >= this.length) { return undefined; }
        const midPoint = Math.floor(this.length/2);
        let current, count;
        if (index < midPoint) {
            count = 0;
            current = this.head;
            while(count != index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length--;
            current = this.tail;
            while(count != index) {
                current = current.previous;
                count--;
            }
        } 
        return current;
    }
    set(index, val) {
        const foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) { return this.shift(val); }
        if (index === this.length) { return this.push(val); }
        
        const newNode = new Node();
        const beforeNode = this.get(index - 1);
        const afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.previous = beforeNode;
        newNode.next = afterNode;
        afterNode.previous = newNode;
        this.length++;
        return true;

    }
}

const list = new DoubleLinkedList();
list.push('prashant')
list.push('shikant')
list.set(0, 'usha');
console.log(list);