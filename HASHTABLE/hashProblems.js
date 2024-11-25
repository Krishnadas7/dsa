class Node {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.next = null;
    }
  }
class HashTable {
  constructor (size) {
    this.table = new Array(size)
    this.size = size
  }

  hash (key) {
    return key.toString().length % this.size; 
  }
  set(key, value) {
    let index = this.hash(key);
    let bucket = this.table[index];

    if (!bucket) {
      this.table[index] = new Node(key, value);   
    } else {
      let currentNode = bucket;
      let prevNode = null;
      while (currentNode) {
        if (currentNode.key === key) {
          currentNode.value = value;
          return;
        }
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      prevNode.next = new Node(key, value);
    }
  }
  get(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
  
    if (bucket) {
      let currentNode = bucket;
      while (currentNode) {
        if (currentNode.key === key) { 
          return currentNode.value;
        }
        currentNode = currentNode.next; 
      }
    }
  
    return undefined;
  }
  
  remove(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
  
    if (bucket) {
      let currentNode = bucket;
      let prevNode = null;
  
      while (currentNode) {
        if (currentNode.key === key) {
          if (prevNode) {
            prevNode.next = currentNode.next;
          } else {
            this.table[index] = currentNode.next;
          }
          return;
        }
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
    }else{
      console.log('table is empty');
    }
  }
  
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        let currentNode = this.table[i];
        while (currentNode) {
          console.log(`${currentNode.key} ${currentNode.value}`);
          // console.log(i, currentNode.key, currentNode.value);
          currentNode = currentNode.next;
        }
      }
    }
  }
  
  
}

const table = new HashTable(5);
table.set('name', 'Krishnadas');
// table.set('age',21)
// table.set('place','palakkad')
// table.set('place', 'Palakkad');
// table.set('elacp', 'Palakka');
// table.set('age', 16);
// console.log('using get mehtios',table.get('name'));
// table.remove('age')

table.display();

