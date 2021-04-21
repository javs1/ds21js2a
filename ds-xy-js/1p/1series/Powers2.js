
//2. Powers of 2 
//   power2(n)
// -> n integer
// <- the n first elements of 2^n
const potencia = parseInt(prompt('Introduce la potencia: '));
let n1 = 1;


for (let i = 1; i <= potencia; i++) {
    n1*=2;
    console.log(n1);
}