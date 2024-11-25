class Node {
    constructor (value) {
      this.value = value
      this.next = null
    }
  }
  // ===============
  class linkedList {
    constructor () {
      this.head = null
      this.size = 0
    }
    isEmpty () {
      return this.size === 0
    }
    getSize () {
      return this.size
    }
  // =====================
    //   o(1)
  
    prepend (value) { 
      const node = new Node(value)
      if (this.isEmpty()) {
        this.head = node
      } else {
        node.next = this.head
        this.head = node
      }
      this.size++
    }
  // ====================
    // o(n)
  
    append (value) {
      const node = new Node(value)
      if (this.isEmpty()) {
        this.head = node
      } else {
        let prev = this.head
        while (prev.next) {
          prev = prev.next
        }
        prev.next = node
      }
      this.size++
    }
  
    // ======================
  
    insert (value, index) {
      if (index < 0 || index > this.size) {
        return
      }
      if (index === 0) {
        list.prepend(value)
      } else {
        const node = new Node(value)
        let prev = this.head
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next
        }
        node.next = prev.next
        prev.next = node
        this.size++
      }
    }
  
    // ===============
  
    removeFrom (index) {
      if (index < 0 || index > this.size) {
        return null
      }
      let removedNode
      if (index === 0) {
        removedNode = this.head
        this.head = this.head.next
      }else{
         let prev =this.head
         for(let i=0;i<index-1;i++){
          prev=prev.next
         }
         removedNode=prev.next
         prev.next=removedNode.next
  
      }
      this.size--
      return removedNode.value
    }
  
    // ================
  
    removeValue(value){
      if(this.isEmpty()){
        return null
      }
      if(this.head.value===value){
        this.head=this.head.next
        this.size--
        return value
      }else{
        let prev=this.head
        while(prev.next && prev.next.value!==value){
          prev=prev.next
        }
        if(prev.next){
          const removedNode=prev.next
          prev.next=removedNode.next
          this.size--
          return value
        }
        return null
      }
    }
    // ==========
    search(value){
      if(this.isEmpty()){
        return -1
      }
      let i=0
      let curr =this.head
      while(curr){
        if(curr.value==value){
          return i
        }
        curr=curr.next
        i++
      }
      return -1
      
    }
  
    // =================
    reverse(){
      let prev=null
      let curr=this.head
      while(curr){
        let next=curr.next
        curr.next=prev
        prev=curr
        curr=next
      }
      this.head=prev
    }
  
    // removeDuplicates() {
    //   if (this.isEmpty() || this.head.next === null) {
    //     return;
    //   }
  
    //   let current = this.head;
    //   while (current.next !== null) {
    //     if (current.value === current.next.value) {
    //       current.next = current.next.next;
    //       this.size--;
    //     } else {
    //       current = current.next;
    //     }
    //   }
    // }
  
    // removeDuplicates() {
    //   if (this.isEmpty() || this.head.next === null) {
    //     return;
    //   }
    
    //   let current = this.head;
    
    //   while (current !== null) {
    //     let runner = current;
    
    //     while (runner.next !== null) {
    //       if (runner.next.value === current.value) {
    //         runner.next = runner.next.next;
    //         this.size--;
    //       } else {
    //         runner = runner.next;
    //       }
    //     }
    
    //     current = current.next;
    //   }
    // }
    removeDuplicates(){
      if(this.isEmpty() || this.head.next ===null){
        return 
      }
      let current =this.head
      while(current!=null){
        let runner=current
        while(runner.next!=null){
          if(runner.next.value===current.value){
            runner.next=runner.next.next
            this.size--
          }else{
            runner=runner.next
          }
        }
        current=current.next
      }
    }
  
    print () {
      if (this.isEmpty()) {
        console.log('list is empty')
      } else {
        let curr = this.head
        let listValues = ''
        while (curr) {
          listValues += `${curr.value} `
          curr = curr.next
        }
        console.log('list values ',listValues)
      }
    }
  }
  // ============
  
  const list = new linkedList()
  
  const array=[1,2,3,3,4,5,5,3]
  for(item of array){
    list.prepend(item)
  }
  list.removeDuplicates()
  list.print()
  