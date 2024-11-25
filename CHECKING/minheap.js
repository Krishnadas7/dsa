class MinHeap{
    constructor(){
      this.heap = []
    }
    insert(data){
    this.heap.push(data)
    this.shiftup(this.heap.length-1)
    }
    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }
    shiftup(index){
        let parentIndex = Math.floor((index-1)/2)
        if(this.heap[parentIndex] > this.heap[index]){
            this.swap(index,parentIndex)
            index = parentIndex
        }
    }
    shifdown(index){
        let smallestIndex = index
        let leftChildIndex = 2 * index +1
        let rightChildIndex =  2 * index +2
        if(leftChildIndex < this.heap.length &&this.heap[leftChildIndex] < this.heap[smallestIndex]){
            smallestIndex = leftChildIndex
        }
        if(rightChildIndex < this.heap.length &&this.heap[rightChildIndex]< this.heap[smallestIndex]){
            smallestIndex = rightChildIndex
        }
        if(index != smallestIndex){
            this.swap(index,smallestIndex)
            this.shifdown(smallestIndex)
        }
    }
    display(){
        console.log(this.heap);
    }
    remove(){
        if(this.heap.length === 0 ){
            return null
        }
        let removedValue = this.heap[0]
        let lastValue = this.heap.pop()
        if(this.heap.length>0){
            this.heap[0] = lastValue
            this.shifdown(0)
        }
        return removedValue
    }
    buildArray(arr){
        for(let i=Math.floor((this.heap.length/2)+1); i>=0;i--){
            this.shifdown(i)
        }
    }
}
const h =new MinHeap()
// h.insert(10)
// h.insert(9)
// h.insert(8)
// h.remove(10)
cons
h.display()
    