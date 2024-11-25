class TrieNode{
    constructor(){
        this.children={}
        this.isEnd=false
    }
}

class Trie{
    constructor(){
        this.root=new TrieNode()
        this.endSymbol='*'
    }
    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new TrieNode()
            }
            node=node.children[char]
        }
        node.isEnd=true
    }

    insertSuffixTree(word,index){
        for(let i=index;i<word.length;i++){
            this.insert(word.substring(i))
        }
    }

    populateSuffixTree(word){
        for(let i=0; i< word.length;i++){
            this.insertSuffixTree(word,i)
        }
    }
    contains(word){
        let node=this.root
         for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
         }
         return  node.isEnd
    }
}

const trie= new Trie()
trie.populateSuffixTree('sanu')
trie.populateSuffixTree('sanuram')
// console.log(trie.contains('ram'));
// console.log(Trie);