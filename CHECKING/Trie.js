class TrieNode{
    constructor(){
        this.children = {}
        this.isEnd = false
    }
}
class Trie{
    constructor(){
        this.root = new TrieNode()
        this.endSymbol = "*"
    }

    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] =new TrieNode()
            }
            node = node.children[char]
        }
        node.isEnd =  true
    }
    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isEnd
    }
    populatePrefix(word){
        for(let i=0 ; i < word.length ; i++){
           this.searchPrefix(i,word)
        }
    }
    searchPrefix(index , word){
        for(let i = index ; i<word.length;i++){
            this.insert(word.substring(index))
        }
    }
}

const tr = new Trie()
tr.populatePrefix('sanu')
console.log(tr.search('san'));
// console.log(tr);