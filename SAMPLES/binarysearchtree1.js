class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BST{
    constructor(){
        this.root=null
    }

    insert(value){
    let newNode= new Node(value)
    if(this.root==null){
        this.root=newNode
    }else{
        this.insertNode(this.root,newNode)  
    }
    }
    insertNode(root,node){
        if(node.value<root.value){
         if(root.left==null){
            root.left=node
         }else{
            this.insertNode(root.left,node)
         }
        }else{
            if(root.right==null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
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
                return this.search(root.left)
            }else{
                return this.search(root.right)
            }
        }

    }
}

const bt=new BST()
bt.insert(10)

bt.insert(2)
bt.insert(7)
bt.insert(12)
console.log(bt.search(bt.root,10));

