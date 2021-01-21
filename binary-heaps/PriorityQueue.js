class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        const newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let childIndex = this.values.length - 1;
        while (childIndex > 0) {
            const parentIndex = Math.floor((childIndex - 1) / 2);
            if (this.values[childIndex].priority < this.values[parentIndex].priority) {
                [this.values[childIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[childIndex]];
                childIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    dequeue() {
        const oldNode = this.values[0];
        const lastIndex = this.values.length - 1;
        [this.values[0], this.values[lastIndex]] = [this.values[lastIndex], this.values[0]];
        this.values.pop();
        this.percolateDown();
        return oldNode;
    }

    percolateDown() {
        let parentIndex = 0;
        while (parentIndex < this.values.length - 1) {
            const leftChildIndex = (2 * parentIndex) + 1;
            const rightChildIndex = (2 * parentIndex) + 2;
            const childIndexWithLowerPriorityValue = this.findLesserPriorityValueAndReturnChildIndex(leftChildIndex, rightChildIndex);
            if (this.values[childIndexWithLowerPriorityValue].priority < this.values[parentIndex].priority) {
                [this.values[childIndexWithLowerPriorityValue], this.values[parentIndex]] = [this.values[parentIndex], this.values[childIndexWithLowerPriorityValue]];
                parentIndex = childIndexWithLowerPriorityValue;
            } else {
                break;
            }
        }
    }

    findLesserPriorityValueAndReturnChildIndex(leftChildIndex, rightChildIndex) {
        if (rightChildIndex >= this.values.length) {
            return leftChildIndex;
        }
        if (this.values[leftChildIndex].priority < this.values[rightChildIndex].priority) {
            return leftChildIndex;
        }
        return rightChildIndex;
    }
}

const queue = new PriorityQueue();
queue.enqueue(70, 5);
queue.enqueue(40, 2);
queue.enqueue(20, 1);
queue.enqueue(50, 2);
queue.enqueue(80, 0);
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);

