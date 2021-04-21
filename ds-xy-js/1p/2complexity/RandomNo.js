//3. random number
//   random(n)
// -> n integer
// <- one random number in [1-n]
let random = parseInt(prompt('Introduce el limite del aleatorio'));
let num = Math.floor(Math.random() * random) + 1;
console.log('El numero aleatorio es: '+num)