

class Queue {
    constructor() {
      this.items = [];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      if (!this.isEmpty()) {
        return this.items.shift();
      } else {
        return null;
      }
    }
  
    front() {
      if (!this.isEmpty()) {
        return this.items[0];
      } else {
        return null;
      }
    }
    print(){
        return this.items
    }
  }
  
  // Example usage:
  const queue = new Queue();
  
  // queue.enqueue(1);
  // queue.enqueue(2);
  // queue.enqueue(3);
  // queue.dequeue()
  // console.log(queue.print());
  const q1=new Queue()
  q1.enqueue(10)
  q1.enqueue(20)
  console.log(queue.print());

  
//   console.log("Front of the queue:", queue.front()); 
  
//   while (!queue.isEmpty()) {
//     console.log("Dequeued:", queue.dequeue());
//   }
  