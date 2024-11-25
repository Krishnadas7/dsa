class HashTable{
    constructor(size){
        this.table =new Array(size)
        this.size=size
    }
    hash(key){
        return key.toString().length % this.size
    }
    insert(key,value){
        let index=this.hash(key)
        let bucket=this.table[index]

        if(!bucket){
            this.table[index]=[]
        }
        this.table[index].push([key,value])
    }
    search(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(!bucket){
            console.log('value is not found');
        }else{
           return bucket
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

const bucket=new HashTable(10)
bucket.insert('orange',10)
bucket.insert('name','sanufails')
bucket.insert('name','manu')
console.log('searched element  ',bucket.search('orange'));
bucket.display()