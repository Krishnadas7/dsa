class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}
class Doubly{
    constructor(){
        this.head=null
        this.tail=null
    }
   prepend(value){
    const node=new Node(value)
    if(!this.head){
        this.head=node
        this.tail=node
    }else{
        let curr=this.head
        this.head=node
        node.next=curr
    }
   }
    append(value){
        const node=new Node(value)
        if(!this.head){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
            node.prev=this.tail
        }
    }
    display(){
        let current=this.head
        while(current){
            console.log(current.value);
            current=current.next
        }
    }
}

const doubly=new Doubly()
doubly.append(10)
doubly.append(20)
doubly.append(30)
doubly.prepend(22)
doubly.display()
