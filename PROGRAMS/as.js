class Node{
    constructor(key,value){
        this.key=key
        this.value=value
        this.next=null
    }
}
class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size=size
    }
    hash(key){
        return key.toString().length%this.size
    }
    set(key,value){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(!bucket){
            this.table[index]=new Node(key,value)
        }else{
            let curr=this.table[index]
            let prev=null
            while(curr){
                if(curr.key===key){
                    curr.value=value
                    return
                }
                prev=curr
                curr=curr.next

            }
            prev.next=new Node(key,value)
        }
    }

    search(key){
      let index=this.hash(key)
      let bucket=this.table[index]
      
      
      while(bucket){
      if(bucket.key===key){
        return bucket.value

      }
      bucket=bucket.next
      }
    }
   
    remove(key){
        let index=this.hash(key)
        // let bucket=this.table[index]
        let curr=this.table[index]
        let prev=null
        while(curr){
            if(curr.key===key){
                if(prev){
                    prev.next=curr.next
                }else{
                    this.table[index]=curr.next
                }
             
            }
            prev=curr
            curr=curr.next

        }
    }

    display(){
    for(let i=0;i<this.table.length;i++){
       if(this.table[i]){
        let curr=this.table[i]
        while(curr){
            console.log(i,curr.key,curr.value);
            curr=curr.next
        }
       }
    }
    }
}

const ht=new HashTable(5)
ht.set('name','adhil')
// ht.set('name','sanul')
ht.set('naem','jsxjhsc')
ht.remove('name')
// console.log('searched   ',ht.search('naem'));
ht.display()