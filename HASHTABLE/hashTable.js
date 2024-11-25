class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }
    
    hashFunction(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        let index = this.hashFunction(key);
        if (this.table[index] == null) {
            this.table[index] = new Node(key, value);
            return;
        }
        let current = this.table[index];
        while (current) {
            if (current.key === key) {
                current.value = value;
                return;
            }
            if (current.next === null) {
                break;
            }
            current = current.next;
        }
        const newNode = new Node(key, value);
        current.next = newNode;
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            let current = this.table[i];
            while (current) {
                console.log(`Index ${i}: ${current.key} -> ${current.value}`);
                current = current.next;
            }
        }
    }
}

const hashTable = new HashTable(5);

hashTable.set('name', 'fails');
hashTable.set('nema', 'fa');

hashTable.display();
