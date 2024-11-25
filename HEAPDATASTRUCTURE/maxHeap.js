class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    shiftUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] < this.heap[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    shiftDown(index) {
        let largestIndex = index;
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largestIndex]) {
            largestIndex = leftChildIndex;
        }
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largestIndex]) {
            largestIndex = rightChildIndex;
        }
        if (largestIndex !== index) {
            this.swap(index, largestIndex);
            this.shiftDown(largestIndex);
        }
    }

    buildArray(arr) {
        this.heap = [...arr];
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.shiftDown(i);
        }
    }

    remove() {
        if (this.heap.length === 0) {
            return;
        }
        const removedValue = this.heap[0];
        const lastValue = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = lastValue;
            this.shiftDown(0);
        }
        return removedValue;
    }

    display() {
        console.log(this.heap);
    }
}

const maxHeap = new MaxHeap();
const arr = [9, 8, 7, 6, 5, 4, 88];
maxHeap.buildArray(arr);
maxHeap.display();
// console.log('remove: ', maxHeap.remove());
// maxHeap.display();
