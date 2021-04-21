//1. Fibonacci
//   fibonacci(n)
// -> n integer
// <- the n first fibonacci elements
const num = parseInt(prompt('Introduce la cantidad de elementos: '));
let n1 = 0, n2 = 1, signum;

console.log('Fibonacci:');

for (let i = 1; i <= num; i++) {
    console.log(n1);
    signum = n1 + n2;
    n1 = n2;
    n2 = signum;
}