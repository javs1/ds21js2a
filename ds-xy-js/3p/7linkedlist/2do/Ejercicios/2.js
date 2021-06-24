/*PROBLEM 2
* size()
*
* returns the size of the linked-list
* @returns {number} - size
*
* @example
* size()
* Verify operation result
*/
function Node(element) {
   this.element = element;
   this.next = null;
}

function List() {
   this.head = new Node("head");
   this.find = find;
   this.insert = insert;
   this.display = display;
   this.contar = contar;
}

function find(item) {
   let currNode = this.head;
   while (currNode.element != item) {
   currNode = currNode.next;
   }
   return currNode;
}

function insert(newElement, item) {
   let newNode = new Node(newElement);
   let  current = this.find(item);
   newNode.next = current.next;
   current.next = newNode;
}

function display() {
   let currNode = this.head;
   while (!(currNode.next == null)) {
   console.log(currNode.next.element);
   currNode = currNode.next;
   }
} 

function contar(){
       let c=0;
       let currNode = this.head;
       while (!(currNode.next == null)) {
           c++;
           currNode = currNode.next;
           }  
         return c;  
}

let nums = new LList();
nums.insert(4, "head");
nums.insert(10, 4);
nums.insert(7, 10);
nums.insert(3, 7);
nums.insert(17, 3); 
nums.display() ;
console.log('Total de elementos enlazados ' + nums.contar() ); 
