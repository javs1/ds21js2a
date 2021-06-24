/*PROBLEM 2
* Square Dance
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

function count() {
  return this.dataStore.length;
}  

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length-1];
}
function toString() {
  let retStr = "";
  for ( let i = 0; i < this.dataStore.length; ++i) {
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

function Dancer(name, sex) {
  this.name = name;
  this.sex = sex;
}

function getDancers(males, fameles) {
let dancers=" F Ana\n M Javier\n M Carlos\n M Cesar\n F Carla\nM Raymond Williams\n F Fernanda\n M Bruno\n F Isabel\n".split('\n')
  let names =(dancers).split("\n");
  for (let i = 0; i < names.length; ++i) {
  names[i] = names[i].trim();
  }
  for (let i = 0; i < names.length; ++i) {
  let dancer = names[i].split(" ");
  let sex = dancer[0];
  let name = dancer[1];
  if (sex == "F") {
  femaleDancers.enqueue(new Dancer(name, sex));  
  }
  else {
  maleDancers.enqueue(new Dancer(name, sex));
  }
  }
}

function dance(males, females) {
  console.log("Participantes: \n");
  while (!females.empty() && !males.empty()) {
  person = females.dequeue();
  putstr("La bailarina es: " + person.name);
  person = males.dequeue();
  console.log(" y el bailarin es  " + person.name);
  }
  console.log();
}  

  
let maleDancers = new Queue();
let femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);

if (maleDancers.count() > 0) {
console.log("Existen  " + maleDancers.count() +
"bailarines esperando.");
}

if (femaleDancers.count() > 0) {
console.log("Existen " + femaleDancers.count() +
"bailarinas esperando. ");
}  