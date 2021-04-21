//1. object
//   attach(n)
// -> n random integer
// <- random name added
class Object{
	constructor(){
     	   this.datos={};
	}
	attach(n){
    	   this.datos[n]=n;
	}
	print(){
        	console.log(this.datos);
	}
}