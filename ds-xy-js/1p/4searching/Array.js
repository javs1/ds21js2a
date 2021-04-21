
//4. array
//   attach(n)
// -> n random integer
// <- random name added
class Array{
	constructor(){
    	this.info=new Array();
	}
	attach(n){
    	this.info.push(n);
	}
	print(){
    	for (let i=0;i<this.info.length;i++)
        	console.log(this.info[i]);
	}
}
