class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    // Helper function to swap elements at two indices in the heap
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
  
    // Function to heapify the array from bottom to top
    shiftUp(index) {
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[parentIndex] > this.heap[index]) {
          this.swap(parentIndex, index);
          index = parentIndex;
        } else {
          break;
        }
      }
    }
  
    // Function to heapify the array from top to bottom
    shiftDown(index) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallestIndex = index;
  
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
        smallestIndex = leftChildIndex;
      }
  
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
        smallestIndex = rightChildIndex;
      }
  
      if (smallestIndex != index) {
        this.swap(index, smallestIndex);
        this.shiftDown(smallestIndex);
      }
    }
  
    // Function to build a heap from an array
    buildHeap(arr) {
      this.heap = [...arr];
  
      for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
        this.shiftDown(i);
      }
    }
  
    // Function to insert an element into the heap
    insert(value) {
      this.heap.push(value);
      this.shiftUp(this.heap.length - 1);
    }
  
    // Function to peek at the top element of the heap
    peek() {
      return this.heap[0];
    }
  
    // Function to remove the top element from the heap
    remove() {
      if (this.heap.length === 0) {
        return null;
      }
  
      const removedValue = this.heap[0];
      const lastValue = this.heap.pop();
  
      if (this.heap.length > 0) {
        this.heap[0] = lastValue;
        this.shiftDown(0);
      }
  
      return removedValue;
    }
  
    // Function to get the index of the parent of a given index
    parent(index) {
      return Math.floor((index - 1) / 2);
    }
  
    // Function to get the index of the left child of a given index
    leftChild(index) {
      return 2 * index + 1;
    }
  
    // Function to get the index of the right child of a given index
    rightChild(index) {
      return 2 * index + 2;
    }
  
    // Function to display the current state of the heap
    display() {
      console.log(this.heap);
    }
  }
  
  // Example usage:
  const heap = new MinHeap();
//   const arr=[9,12,6,5,7,9,1,5]
//   heap.buildHeap(arr)
//   heap.display()
  heap.insert(2)
heap.insert(4)
heap.insert(7)
heap.insert(9)
  heap.remove()
  heap.display();
   // [2, 4, 8, 5]
  
//   console.log("Peek:", heap.peek()); 
  // Peek: 2
  
//   console.log("Remove:", heap.remove());
   // Remove: 2
//   heap.display();
   // [4, 5, 8]
  
//   heap.insert(1);
//   heap.display();
   // [1, 5, 4, 8]
  