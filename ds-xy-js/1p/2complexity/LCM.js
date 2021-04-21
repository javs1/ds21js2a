//1. Least common multiple
//   lcm(a,b)
// -> a integer
// -> b integer
// <- lcm 
let a=7;
let b=14;
while(a!=b){
    if(a>b){
     a-=b;
    }
    else{
     b-=a;
    }
}
console.log(a);

    