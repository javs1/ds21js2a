/*PROBLEM 2
* removeAt(p)
*
* removes value at position p
* @arg {number} p - position
*
* @example
* removeAt(3)
*/

let numeros = [1,2,3,4,5,9,7];
let pos=3;
let borrar= numeros.splice(pos, 1)
console.log(numeros); 