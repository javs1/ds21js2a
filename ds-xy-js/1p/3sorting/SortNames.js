//4. sort - use JS Array.sort implementation
//   sort(o)
// -> o an object containing random names
// <- the random names sorted
// verify is sorted
let A = Array.from({length: 10}, () => 
String.fromCharCode(Math.floor(Math.random() * (90 - 65)) + 65)
+String.fromCharCode(Math.floor(Math.random() * (90 - 65)) + 65)
+String.fromCharCode(Math.floor(Math.random() * (90 - 65)) + 65)
+String.fromCharCode(Math.floor(Math.random() * (90 - 65)) + 65));
console.log('Array inicial: '+ A)

A.sort();

console.log('Array acomodado: '+ A)