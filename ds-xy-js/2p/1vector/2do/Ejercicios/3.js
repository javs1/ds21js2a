/* PROBLEM 3
* insertFirst(v)
*
* inserts value v at first position
* @arg {number} v - value
*
* @example
* insertFirst(4)
* may wrap method unshift
* Verify operation result by outputing the array before and after
*/

    let numeros = [2,3,4,5];
    let  primero = 9;
    let n = numeros.length;
        for (let i = n; i >= 0; --i) {
        numeros[i] = numeros[i-1];
   }
    numeros[0] =primero;
    console.log(numeros); 

///2DO EJEMPLO
   let numeros = [1,2,3,4,5,9,7];
   let firts = numeros.unshift(8)
   console.log(numeros); 