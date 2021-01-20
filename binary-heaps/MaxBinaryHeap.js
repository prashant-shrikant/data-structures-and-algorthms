class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let childIndex = this.values.length - 1;
        let parentIndex = Math.floor((childIndex - 1) / 2);
        while (this.values[parentIndex] < this.values[childIndex]) {
            [this.values[parentIndex], this.values[childIndex]] = [this.values[childIndex], this.values[parentIndex]];
            childIndex = parentIndex;
            parentIndex = Math.floor(([parentIndex] - 1) / 2);
        }
    }

    extractMaximum() {
        const oldRoot = this.values[0];
        let lastIndex = this.values.length - 1;
        [this.values[0], this.values[lastIndex]] = [this.values[lastIndex], this.values[0]];
        this.values.pop();
        this.percolateDown();
        return oldRoot;
    }

    percolateDown() {
        let parentIndex = 0;
        while (true) {
            let childOneIndex = (parentIndex * 2) + 1;
            let childTwoIndex = (parentIndex * 2) + 2;
            let largerChildIndex = this.findLargerChildValueAndReturnIndex(childOneIndex, childTwoIndex);
            if (this.values[largerChildIndex] > this.values[parentIndex]) {
                [this.values[parentIndex], this.values[largerChildIndex]] = [this.values[largerChildIndex], this.values[parentIndex]];
                parentIndex = largerChildIndex;
            } else {
                break;
            }
        }
    }

    findLargerChildValueAndReturnIndex(childOneIndex, childTwoIndex) {
        if (this.values[childOneIndex] > this.values[childTwoIndex]) {
            return childOneIndex;
        }
        return childTwoIndex;
    }
}

const heap = new MaxBinaryHeap();
heap.insert(70);
console.log(heap);
console.log(heap.extractMaximum());
console.log(heap);