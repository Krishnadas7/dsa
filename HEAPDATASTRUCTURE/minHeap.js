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
        let parentIndex = Math.floor((index-1)/2)
        if(this.heap[parentIndex]>this.heap[index]){
            this.swap(parentIndex,index)
            index=parentIndex
        }else{
            break;
        }
     }
    }

    shifDown(index){
        let smallestIndex = index
        let leftChildIndex = 2*index+1
        let rightChildIndex = 2*index+2
        
        if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]){
            smallestIndex = leftChildIndex
            
        }
        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]){
            smallestIndex = rightChildIndex
        }
         
        if(smallestIndex !== index){
            this.swap(index,smallestIndex)
            this.shifDown(smallestIndex)
        }
    } 
    buildArray(arr){
        this.heap=[...arr]
        for(let i=this.heap.length-1;i>0;i--){
            this.shifDown(i)
        }
    }
    
    remove(){
        if(this.heap.length==0){
            return
        }
        const removedValue=this.heap[0]
        const lastValue=this.heap.pop()
        if(this.heap.length>0){
            this.heap[0]=lastValue 
            this.shifDown(0)
        }
        return removedValue
    }
    display(){
        console.log(this.heap);
    }
}
const heap=new MinHeap()
const arr = [9,8,4,66,11,45]
heap.buildArray(arr)
// heap.insert(10)
// heap.insert(3)
// heap.insert(1)
// heap.insert(9)
// console.log('remocvee  ',heap.remove());
heap.display()
// console.log(heap);
