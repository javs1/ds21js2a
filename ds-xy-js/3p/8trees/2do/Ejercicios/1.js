/* PROBLEM 1
* preorder(n)
*
* traverses a tree in PREORDER
* @arg {tree} n - tree
*
* @example
* preorder(root)
*/
function Node(data,left,right){
  this.data=data;
  this.left=left;
  this.right=right;
  this.show=show;
}

function show(){
  return this.data;
} 

function BST (){
  this.root=null;
  this.insert=insert;
  this.preOrder=preOrder;
}
  
function preOrder(node) {
  if (!(node == null)) {
   console.log(node.show() + " ");
   preOrder(node.left);
   preOrder(node.right);
  }
} 

function insert(data){
  let n=new Node(data,null,null);
  if(this.root==null){
    this.root=n;
  }
  else{
    let current=this.root;
    let parent;
    while(true){
      parent=current;
      if(data<current.data){
        current=current.left;
        if(current==null){
          parent.left=n;
          reak;
        }
      }
      else{
        current=current.right;
        if(current==null){
          parent.right=n;
          break;
        }
      }
    }
  }
}

let nums=new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log('Árbol preordenado  :');
preOrder(nums.root);        