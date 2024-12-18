function heapSort(arr) {
    buildMaxHeap(arr);
  
    for (let i = arr.length - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
  
      heapify(arr, i, 0);
    }
  }
  
  function buildMaxHeap(arr) {
    const n = arr.length;
  
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  }
  
  function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1; // Left child
    const right = 2 * i + 2; // Right child
  
    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
  
    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    // If the largest is not the root
    if (largest !== i) {
      // Swap the root with the largest element
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
  
      // Recursively heapify the affected sub-tree
      heapify(arr, n, largest);
    }
  }
  
  // Example usage
  const arrayToSort = [12, 11, 13, 5, 6, 7];
  console.log('Original Array:', arrayToSort);
  
  heapSort(arrayToSort);
  console.log('Sorted Array:', arrayToSort);
  