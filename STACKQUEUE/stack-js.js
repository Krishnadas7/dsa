class Stack{
    constructor(){
        this.items=[]
    }

    push(element){
    this.items.push(element)
    }
    pop(){
        if(this.items.length==0){
            return 'underflow'
        }
       return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length==0
    }
    print(){
        let str=''
        for(let i=0;i<this.items.length;i++){
            str+=this.items[i]+' '
        }
        return str
    }

    reverse() {
        if (!this.isEmpty()) {
          const popped = this.pop();
          this.reverse();
          this.insertAtBottom(popped);
        }
      }
    
      insertAtBottom(item) {
        if (this.isEmpty()) {
          this.push(item);
        } else {
          const popped = this.pop();
          this.insertAtBottom(item);
          this.push(popped);
        }
      }
    
    
}

let stack = new Stack()
stack.reverse();
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
console.log(stack.print());
