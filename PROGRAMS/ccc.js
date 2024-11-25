class Node{
    constructor(key,value){
        this.value=value
        this.key=key
        this.next=null
    }
}
class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        return key.toString().length%this.size
    }
    set(key,value){
        let index=this.hash(key)
        let bucket = this.table[index]
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

    remove(key){
        let index=this.hash(key)
        let bucket= this.table[index]
        if(bucket){
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
    }
    search(key){
        let index=this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            let curr=bucket
            while(curr){
                if(curr.key===key){
                    return curr.value
                }
                curr=curr.next
            }
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
const bt=new HashTable(10)
bt.set('name','sanu')
bt.set('naem','manu')
bt.set('anem','manu')
bt.remove('anem')
console.log('searched element  ',bt.search('anem'));
bt.display()