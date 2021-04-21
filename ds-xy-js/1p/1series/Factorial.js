
//3. Factorial
//   factorial(n)
// -> n integer
// <- the n first factorial elements
let factorial = parseInt(prompt('Introduce el numero factorial: '));
let n1 = 1;


for ( factorial; factorial > 1; factorial--) {
    n1*=factorial;
    console.log(n1);
}

