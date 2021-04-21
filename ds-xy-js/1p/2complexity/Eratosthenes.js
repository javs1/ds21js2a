//2. sieve of Eratosthenes
//   sieve(n)
// -> n integer
// <- the n first elements
function primo(numero) {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero !== 1;
}

let c = parseInt(prompt('Introduce el limite '));
let j = 2;
let Eratosthenes = [];

for (; j < c; j++) {
  if (primo(j)) {
    Eratosthenes.push(j);
  }
}

console.log(Eratosthenes);