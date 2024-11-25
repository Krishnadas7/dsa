class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
        this.endSymbol = "*"; // Symbol to mark the end of a word
    }
 
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }

    contains(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEnd;
    }

    insertSubstringStartingAt(word, index) {
        for (let i = index; i < word.length; i++) {
            this.insert(word.substring(i));
        }
    }

    populateSuffixTree(word) {
        for (let i = 0; i < word.length; i++) {
            this.insertSubstringStartingAt(word, i);
        }
    }
}

// Example Usage:
const trie = new Trie();
trie.populateSuffixTree('sanu')
// trie.insert("apple");
// trie.insert("app");
// trie.insert("banana");
// console.log(trie);
console.log(trie.contains("u")); 
// true
// console.log(trie.contains("appl")); 
// false
// console.log(trie.contains("banana"));
 // true

// trie.populateSuffixTree("banana");

// console.log(trie.contains("nan")); 
// true
// console.log(trie.contains("a"));
 // true
