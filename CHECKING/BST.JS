class Node{
    constructor(value){
        this.value=value
        this.right=null
        this.left = null
    }
}

class BST{
    constructor(){
        this.root = null
    }
    insert(value){
        const node = new Node(value)
        if(this.root==null){
            this.root = node
        }else{
            this.inserTedNode(this.root,node)
        }
    }
    inserTedNode(root,node){
        if(node.value< root.value){
            if(root.left == null){
                root.left = node
            }else{
               return this.inserTedNode(root.left,node)
            }
        }else{
            if(root.right == null){
                root.right = node
            }else{
               return this.inserTedNode(root.right,node)
            }
        }
    }
    search(root,data){
       if(!root){
        return false
       }else{
        if(data === root.value){
            return true
        }else if(data < root.value){
          return   this.search(root.left,data)
        }else{
           return this.search(root.right,data)
        }
       }
    }

    closestValue(target){
        let current = this.root
        let closest = current.value
        while(current != null){  
            if(Math.abs(closest-target) > Math.abs(target - current.value)){
                closest = current.value
            }
            if(target < current.value ){
                current = current.left
            }else{
                current = current.right
            }
        }
        return closest

    }
}

const bst = new BST()
bst.insert(10)
bst.insert(5)
bst.insert(19)
console.log(bst.closestValue(7));
console.log(bst.search(bst.root,5));
// console.log(bst);