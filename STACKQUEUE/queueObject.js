class Queue{
    constructor(){
        this.items={}
        this.fontIndex=0
        this.rear=0
    }

    enqueue(item){
        this.items[this.rear]=item
        this.rear++
        return item+ "inserted"
    }

    dequeue() {
        const item = this.items[this.fontIndex];
        delete this.items[this.fontIndex];
        this.fontIndex++;
        return item;
    }

    peek(){
        return this.items[this.fontIndex]
    }
    get printQueue(){
    return this.items
    }
    
}
let queue= new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(10)
// queue.dequeue()
var str= queue.printQueue
console.log(str); 