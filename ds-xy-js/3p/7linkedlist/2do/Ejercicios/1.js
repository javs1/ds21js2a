/*PROBLEM 1
 * add(v)
 *
 * add an element at the end to the linked-list
 * @arg {type} v - value; may be of chars, numbers, u objects
 *
 * @example
 * add(3)
 * add element at the beginning 
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
   
let nums = new LList();
nums.insert(4, "head");
nums.insert(10, 4);
nums.insert(7, 10);
nums.insert(3, 7);  
nums.display() ;