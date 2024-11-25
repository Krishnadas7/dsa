// class Node {
//     constructor(key, value) {
//       this.key = key;
//       this.value = value;
//       this.next = null;
//     }
//   }
  
//   class LinkedList {
//     constructor() {
//       this.head = null;
//     }
  
//     addToTail(key, value) {
//       const newNode = new Node(key, value);
//       if (!this.head) {
//         this.head = newNode;
//       } else {
//         let current = this.head;
//         while (current.next) {
//           current = current.next;
//         }
//         current.next = newNode;
//       }
//     }
  
//     find(key) {
//       let current = this.head;
//       while (current) {
//         if (current.key === key) {
//           return current;
//         }
//         current = current.next;
//       }
//       return null;
//     }
  
//     update(key, value) {
//       let node = this.find(key);
//       if (node) {
//         node.value = value;
//       }
//     }
//   }
  
//   class HashTable {
//     constructor(size) {
//       this.table = new Array(size);
//       this.size = size;
//     }
  
//     hash(key) {
//       let total = 0;
//       for (let i = 0; i < key.length; i++) {
//         total += key.charCodeAt(i);
//       }
//       return total % this.size;
//     }
  
//     set(key, value) {
//       let index = this.hash(key);
//       if (!this.table[index]) {
//         this.table[index] = new LinkedList();
//       }
//       this.table[index].addToTail(key, value);
      
//     }
  
//     get(key) {
//       let index = this.hash(key);
//       if (this.table[index]) {
//         let node = this.table[index].find(key);
//         return node ? node.value : undefined;
//       }
//       return undefined;
//     }
  
//     remove(key) {
//       let index = this.hash(key);
//       if (this.table[index]) {
//         let current = this.table[index].head;
//         if (current && current.key === key) {
//           this.table[index].head = current.next;
//         } else {
//           let prev = null;
//           while (current && current.key !== key) {
//             prev = current;
//             current = current.next;
//           }
//           if (current) {
//             prev.next = current.next;
//           }
//         }
//       }
//     }
  
//     display() {
//       for (let i = 0; i < this.size; i++) {
//         if (this.table[i] && this.table[i].head) {
//           let current = this.table[i].head;
//           while (current) {
//             console.log(i, current.key, current.value);
//             current = current.next;
//           }
//         }
//       }
//     }
//   }
  
//   const table = new HashTable(10);
//   table.set('orange',10)
//   table.set('apple',20)
//   table.set('eppla',70)
//   table.set('banana',30)
//   table.set('banana',90)
//   console.log('searching :',table.get('banana'));
//   table.display();
  
class Node {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.next = null;
    }
  }
  
  class HashTable {
    constructor(capacity) {
      this.capacity = capacity;
      this.size = 0;
      this.table = new Array(capacity).fill(null);
    }
  
    hash(key) {
           let total = 0;
           for (let i = 0; i < key.length; i++) {
               total += key.charCodeAt(i);
               }
              return total % this.size;
            }
  
    insert(key, value) {
      const index = this.hash(key);
  
      if (!this.table[index]) {
        this.table[index] = new Node(key, value);
        this.size += 1;
      } else {
        let current = this.table[index];
  
        while (current) {
          if (current.key === key) {
            current.value = value;
            return;
          }
          current = current.next;
        }
  
        const newNode = new Node(key, value);
        newNode.next = this.table[index];
        this.table[index] = newNode;
        this.size += 1;
      }
    }
  
    search(key) {
      const index = this.hash(key);
      let current = this.table[index];
  
      while (current) {
        if (current.key ==key) {
          return current.value;
        }
        current = current.next;
      }
  
      throw new Error('Key not found');
    }
  
    remove(key) {
      const index = this.hash(key);
      let previous = null;
      let current = this.table[index];
  
      while (current) {
        if (current.key === key) {
          if (previous) {
            previous.next = current.next;
          } else {
            this.table[index] = current.next;
          }
          this.size -= 1;
          return;
        }
        previous = current;
        current = current.next;
      }
  
      throw new Error('Key not found');
    }
  
    size() {
      return this.size;
    }
  
    contains(key) {
      try {
        this.search(key);
        return true;
      } catch (error) {
        return false;
      }
    }
  }
  
  // Driver code
  const table = new HashTable(5);
  table.insert('banana',10)
  table.insert('orange',20)
  table.insert('mango',30)
  console.log(table.search('banana'));
 
  