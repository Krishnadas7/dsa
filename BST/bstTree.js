class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root==null
    }
    insert(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left==null){
              root.left=newNode
            }else{
             this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right==null){
                root.right=newNode
            }else{
              this.insertNode(root.right,newNode)
            }
        }
    }
    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value===value){
                return true
            }else if(value<root.value){
               return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
        
    }
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    postOrder(root){
        if(root){

            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    




remove(data){
    this.root = this.removeNode(this.root, data);
}
removeNode(node, key) {
    if (node === null)
        return null;

    if (key < node.value) {
        node.left = this.removeNode(node.left, key);
        return node;
    } else if (key > node.value) {
        node.right = this.removeNode(node.right, key);
        return node;
    } else {
        if (node.left === null)
            return node.right;
        else if (node.right === null)
            return node.left;

        node.value = this.findMinNode(node.right).value;
        node.right = this.removeNode(node.right, node.value);
        return node;
    }
}

findMinNode(node) {
    if (node.left === null)
        return node;
    else
        return this.findMinNode(node.left);
}
}


function isBST(tree) {
    const values = [];
    
    function inOrderTraversal(node) {
        if (node !== null) {
            inOrderTraversal(node.left);
            values.push(node.value);
            inOrderTraversal(node.right);
        }
    }

    // Perform in-order traversal starting from the root
    inOrderTraversal(tree.root);

    // Check if the values array is sorted
    for (let i = 1; i < values.length; i++) {
        if (values[i] <= values[i - 1]) {
            return false;
        }
    }

    return true;
}

const bt=new BinarySearchTree()
console.log('is empty or not ',bt.isEmpty());
bt.insert(10)
bt.insert(5)
bt.insert(1)
bt.insert(6)
bt.insert(7)
bt.insert(12)
bt.insert(18)
// console.log(bt);
// bt.remove(1)
// console.log(bt.remove(5));
bt.inOrder(bt.root)
// console.log('Is BST:', isBST(bt));

// console.log('searched value  ',bt.search(bt.root,3));