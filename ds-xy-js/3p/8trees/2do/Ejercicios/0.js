/*PROBLEM 0
 * insert(n)
 *
 * inserts a node into a tree
 * @arg {data} n - data may be: object, char, number, string
 *
 * @example
 * insert('one')
 */
 
function Node(data,left,right){
  this.data=data;
  this.left=left;
  this.right=right;
}

function BST (){
  this.root=null;
  this.insert=insert;
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
          break;
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
console.log(nums.root);