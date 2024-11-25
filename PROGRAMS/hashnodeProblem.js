class Node{
    constructor(key,value){
        this.key=key
        this.value=value
        this.next=null
    }
}
class HashTable{
    constructor(size){
        
    this.table=new Array(size)
    this.size=size
    }
    hash(key){
        return key.toString().length % this.size;
    }
    insert(key,value){
        let node=new Node(key,value)
        let index=this.hash(key)
        let bucket=this.table[index]
        if(!bucket){
            this.table[index]=node
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
        let bucket =this.table[index]
        while(bucket){
            if(bucket.key===key){
                return bucket.value
            }
            bucket=bucket.next
        }

    }
     
    display(){
        for(let i=0;i<this.table.length;i++){
         let curr=this.table[i]
         while(curr){
             console.log(i,curr.key,curr.value);
             curr=curr.next
         }
        }
     }

}

const ht=new HashTable(2)
ht.insert('name' ,'sanu')
ht.insert('age',66)
ht.insert('naem' ,'sanaa')
 console.log('searched element',ht.search('naem'));
ht.display()
