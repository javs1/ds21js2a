/*PROBLEM 1
* Queue implementation
*/

function Queue() {
   this.dataStore = [];
   this.enqueue = enqueue;
   this.dequeue = dequeue;
   this.front = front;
   this.back = back;
   this.toString = toString;
   this.empty = empty;
}

function enqueue(element) {
   this.dataStore.push(element);
}

function dequeue() {
   return this.dataStore.shift();
}

function front() {
   return this.dataStore[0];
}

function back() {
   return this.dataStore[this.dataStore.length-1];
}

function toString() {
   let retStr = "";
   for (let i = 0; i < this.dataStore.length; ++i) {
   retStr += this.dataStore[i] + "\n";
   }
   return retStr;
}

function empty() {
   if (this.dataStore.length == 0) {
   return true;
   }
   else {
   return false;
   }
} 

let q = new Queue();

q.enqueue("Javier");
q.enqueue("Carlos");
q.enqueue("Cesar");
q.enqueue("Saul");
q.enqueue("Carla");
q.enqueue("Ana");
console.log(q.toString());
q.dequeue();

console.log(q.toString());
console.log("Inicio de la cola: " + q.front());
console.log("Final de la cola: " + q.back());  