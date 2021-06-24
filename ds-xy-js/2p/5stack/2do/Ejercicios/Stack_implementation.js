/*PROBLEM 1
* Stack implementation
*/
function Stack() {
   this.dataStore = [];
       this.top = 0;
   this.push = push;
   this.pop = pop;
   this.peek = peek;
   this.clear = clear;
   this.length = length;
   }
function push(element) {
   this.dataStore[this.top++] = element;
   }
function peek() {
   return this.dataStore[this.top-1];
   }
function pop() {
   return this.dataStore[--this.top];
   }
function clear() {
   this.top = 0;
   }
function length() {
   return this.top;
   }
let s = new Stack();
    s.push("David");
    s.push("Raymond");
    s.push("Bryan");
    console.log("length: " + s.length());
    console.log(s.peek());
    s.push("Cynthia");
    console.log(s.peek());
    console.log("length: " + s.length());
    console.log(s.peek());
    s.push("Clayton");
    s.push("Diana");
    s.push("Raul");
    s.push("Sebastian"); 
    s.push("Vanesa");
    s.push("Sabrina");
    console.log("length: " + s.length());
    console.log(s.peek()); 
    s.push("Karina");
    console.log(s.peek());