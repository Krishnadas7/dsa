class TrieNode{
    constructor(){
        this.children={}
        this.isEnd=false
    }
}
class Trie{
    constructor(){
        this.root = new TrieNode()
        this.endSymbol='*'
    }
    insert(word){
        let node = this.root
        for(let char of word){
           if(!node.children[char]){
            node.children[char] = new TrieNode()
           }
         node =  node.children[char]
        }
        node.isEnd=true
    }

    contains(word){
       let  node = this.root
       for(let char of word){
        if(!node.children[char]){
            return false
        }
        node = node.children[char]
       }
       return node.isEnd
    }
    insertPrefix(index,word){
       for(let i=index;i<word.length;i++){
        this.insert(word.substring(i))
       }
    }
    wordPrefix(word){
        for(let i=0;i<word.length;i++){
            this.insertPrefix(i,word)
        }
    }
}

const t = new Trie()
t.wordPrefix('arnold')
console.log(t.contains('r'));
console.log(t);

// t.insert('apple')
// t.insert('orange')
// t.insert('appus')
// console.log(t.contains('orange'));
// console.log(t);