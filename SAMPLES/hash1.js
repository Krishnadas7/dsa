class Node{
    constructor(key,value){
        this.value=value
        this.next=null
        this.key=key
    }
}
class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
      let total=0
      for(let i=0;i<key.length;i++){
        total+=key.charCodeAt()
      }
      return total%this.size
    }

    set(key,value){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(!bucket){
            this.table[index]=new Node(key,value)
        }else{
           let currentNode=bucket
           let prevNode=null
           while(currentNode){
            if(currentNode.key===key){
                currentNode.value=value
                return
            }
            prevNode=currentNode
            currentNode=currentNode.next
           }
           prevNode.next=new Node(key,value)
        }
    }
    search(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(bucket){
            let currentNode=bucket
            while(currentNode){
                if(currentNode.key){
                    return currentNode.value
                }
                currentNode=currentNode.next
            }
        }
    }
    delete(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(bucket){
           let current=bucket
           let prev=null
           while(current){
              if(current.key===key){
                if(prev){
                    prev.next=current.next
                }else{
                    this.table[index]=current.next
                }
              }
              current=current.next
           }
        }
    }

    print(){
        for(let i=0;i<this.table.length;i++){
            let currentNode=this.table[i]
            if(currentNode){
                while(currentNode){
                    console.log(`${i} , ${currentNode.key} , ${currentNode.value}`);
                    currentNode=currentNode.next
                }
            }
        }
    }
}
const ht=new HashTable(10)
ht.set('orange',10)
ht.set('erango',10)
ht.set('apple',20)
ht.delete('apple')
// console.log('searched value  ',ht.search('apple'));
ht.print()