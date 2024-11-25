class Node {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
class BST {
  constructor () {
    this.root = null
  }

  insert (data) {
    let node = new Node(data)
    if (this.root == null) {
      this.root = node
    } else {
      this.insertedNode(this.root, node)
       }
  }
  insertedNode (root, node) {
    if (node.value < root.value) {
      if (root.left == null) {
        root.left = node
      } else {
        this.insertedNode(root.left, node)
      }
    }else{
        if( root.right == null){
            root.right = node
        }else{
            this.insertedNode(root.right, node)
        }
    }
  }

  search(root,data){
    if(!root){
        return false
    }
    if(data == root.value){
        return true
    }else{
        if(data < root.value){
            return this.search(root.left,data)
        }else{
            return this.search(root.right,data)
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
  closestValue(target){
    let current = this.root
    let closest = current.value
    while(current!=null){
        if(Math.abs(target-closest) > Math.abs(target-current.value)){
            closest = current.value
        }
        if(target < current.value){
           current = current.left
        }else{
            current = current.right
        }
    }
    return closest
  }

  isValidBST() {
    return this.checkBST(this.root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
  }

  checkBST(node, min, max) {     
    if (node === null) {
      return true;
    }
    if (node.value <= min || node.value >= max) {
      return false;
    }
    return (
      this.checkBST(node.left, min, node.value) &&
      this.checkBST(node.right, node.value, max)
    );
  }
}

const bst = new BST()
bst.insert(10)
bst.insert(10)
bst.insert(13)
// bst.inOrder(bst.root)
console.log(bst.isValidBST());

// console.log(bst.search(bst.root,183));
// console.log(bst.closestValue(11)); 
// console.log(bst);
