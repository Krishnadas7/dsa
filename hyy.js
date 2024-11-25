class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BinarySearchTree{
    constructor(){
        this.root= null
    }
    inserTedNode(root,node){
        if(  node.value < root.value){
            if(root.left==null){
                root.left =node
            }else{
                this.inserTedNode(root.left,node)
            }
        }else{
            if(root.right==null){
                root.right =node
            }else{
                this.inserTedNode(root.right,node)
            }
        }
    }
    insert(data){
        const node = new Node(data)
        if(this.root == null){
          this.root=node
        }else{
            this.inserTedNode(this.root,node)
        }
    }
}

const bst=new BinarySearchTree()
bst.insert(10)
// console.log(bst);