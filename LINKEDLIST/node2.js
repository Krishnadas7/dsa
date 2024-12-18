class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class linkedList{
    constructor(){
    this.head=null
    this.size=0
}
isEmpty(){
  return  this.size===0
}
getSize(){
    return this.size
}

// 5 4 3 2 1
prepend(value){
    const node=new Node(value)
    if(this.isEmpty()){
        this.head=node
    }else{
        node.next=this.head
        this.head=node
    }
    this.size++
}

// 1 2 3 4 5

append(value){
    const node=new Node(value)
    if(this.isEmpty()){
        this.head=node
    }else{
       let prev=this.head
       while(prev.next){
        prev=prev.next
       }
       prev.next=node
       
    }
    this.size++
}

insert(value,index){
    if(index<0||index>this.size){
        rerutn 
    }
    if(index==0){
        list.prepend(value)
    }else{
        const node=new Node(value)
        let prev=this.head
        for(let i=0;i<index-1;i++){
            prev=prev.next
        }
        node.next=prev.next
        prev.next=node
    }
    this.size++

}
 removeFrom(index){
    if(index<0 || index>this.size){
        return null
    }
    let removedNode
    if(index==0){
        removedNode=this.head
        this.head=this.head.next
    }else{
        let prev=this.head
        for(let i=0;i<index-1;i++){
            prev=prev.next
        }
        removedNode=prev.next
        prev.next=removedNode.next
    }
    this.size--
    return removedNode.value
 }

print(){
    if(this.isEmpty()){
        console.log('no values is left');
    }else{
        let curr=this.head
        let listValues=''
        while(curr){
          listValues+=`${curr.value} `
          curr=curr.next
        }
        console.log('list values ',listValues);
    }
}
}

const list=new linkedList()
// list.prepend(10)
// list.prepend(20)
list.append(2)
list.append(21)
// list.insert(100,1)
// console.log(list.removeFrom(1));

list.print()