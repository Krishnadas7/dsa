class MinHeap{
    constructor(){
        this.heap=[]
    }
    insert(value){
        this.heap.push(value)
        this.shiftUp(this.heap.length-1)
    }
    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }
    shiftUp(index){
        while(index>0){
            let parentIndex=Math.floor((index-1)/2)
            if(this.heap[parentIndex]>this.heap[index]){
                this.swap(parentIndex,index)
                index=parentIndex
            }
        }
    }
    shiftDown(index){
        let smallestIndex = index
        let leftChildIndex = 2 * index +1
        let rightChildIndex = 2 * index +2
         
        if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]){
            smallestIndex = leftChildIndex
        }
        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]){
            smallestIndex = rightChildIndex
        }

        if(smallestIndex != index){
            this.swap(smallestIndex,index)
            this.shiftDown(smallestIndex)
        }

    }
    remove(){
        if(this.heap.length===0){
            return null
        }
        let removedValue=this.heap[0]
        let lastValue=this.heap.pop()

        if(this.heap.length>0){
            this.heap[0]=lastValue
            this.shiftDown(0)
        }
        return removedValue

    }

    buildArray(arr){
        this.heap=[...arr]
        for(let i=Math.floor((this.heap.length/2)+1);i>=0;i--){
            this.shiftDown(i)
        }
    }
}
const heap=new MinHeap()
// heap.insert(2)
const arr=[8,7,6,4,2,1,9,6,4]
heap.buildArray(arr)
console.log(heap);