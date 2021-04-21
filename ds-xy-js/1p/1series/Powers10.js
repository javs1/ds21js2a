//2. Powers of 10
//   power10(n)
// -> n integer
// <- the n first elements of 10^n
const potencia = parseInt(prompt('Introduce la potencia: '));
let n1 = 1;


for (let i = 1; i <= potencia; i++) {
    n1*=10;
    console.log(n1);
}
