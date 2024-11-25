class MinHeap{
    constructor(){
        this.heap=[]
    }
    swap(i,j){
     [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }
    insert(data){
        this.heap.push(data)
        this.shiftUp(this.heap.length-1)
    }
    shiftUp(index){
        while(index>0){
            let parentIndex = Math.floor((this.heap.length/2)-1)
            if(this.heap[parentIndex]>this.heap[index]){
                this.swap(parentIndex,index)
                index =parentIndex
            }else{
                break
            }
           
        }
    }
    display(){
        console.log(this.heap);
    }
}

const heap = new MinHeap()
heap.insert(16)
heap.insert(11)
heap.insert(11)
// console.log(heap);
heap.display()