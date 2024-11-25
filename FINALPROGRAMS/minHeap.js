class MinHeap{
    constructor(){
        this.heap=[]
    }

    swap(i,j){
        [this.heap[i],this.heap[j]]=  [this.heap[j],this.heap[i]]
    }

    insert(value){
        this.heap.push(value)
        this.shiftUp(this.heap.length-1)
    }
    shiftUp(index){
        
     let parentIndex=Math.floor((index-1)/2)
     if(this.heap[parentIndex] > this.heap[index]){
        this.swap(index,parentIndex)
        index=parentIndex
     }
    }

    shiftDown(index){

        let smallestIndex =  index
        let leftChildIndex= 2*index+1
        let rightChildIndex= 2*index+2
        if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]){
            smallestIndex=leftChildIndex
        }
        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]){
            smallestIndex = rightChildIndex
        }
        if(index != smallestIndex){
            this.swap(index,smallestIndex)
            this.shiftDown(smallestIndex)
        }
    }
    display(){
        if(this.heap.length==0){
            return null
        }else{
            console.log(this.heap);
        }
      
    }

    buildHeap(arr){
        this.heap=[...arr]
        for(let i = Math.floor((this.heap.length/2)+1);i>=0;i--){
            this.shiftDown(i)
        }
       
    }
    remove(){
        if(this.heap.length===0){
            return 
        }
        let removedValue=this.heap[0]
        let lastValue=this.heap.pop()
        if(this.heap.length>0){
            this.heap[0]=lastValue
            this.shiftDown(0)
        }
        return removedValue


    }
}
const h=new MinHeap()
// const arr=[9,8,7,6,5,4]
// h.buildHeap(arr)
h.insert(10)
h.insert(11)
h.insert(15)
h.insert(13)
h.insert(1)
h.insert(9)
// h.remove()
h.display()