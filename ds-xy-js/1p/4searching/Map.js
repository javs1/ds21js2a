//3. map
//   attach(n)//wrap the method 'set'
// -> n random integer
// <- 
class Map{
	constructor(){
    	this.datos=new Map();
	}
	attach(n){
    	this.datos.set(n,n);
	}
	print(){
    	this.datos.forEach( (value,key)=>console.log(value,'  ',key));
	}
}
