//2. set
//   attach(n)//wrap the method 'add'
// -> n random integer
// <- 
class Set{
	constructor(){
    	this.datos=new Set();
	}
	attach(n){
    	this.datos.add(n);
	}
	print(){
    	this.datos.forEach((val)=>console.log(val))
	}
}