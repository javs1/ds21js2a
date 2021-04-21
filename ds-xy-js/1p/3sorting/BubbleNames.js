
//3. bubble - your implementation 
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

  for (let i = 0; i < A.length; i++ ) {
    for (let j = 0; j < A.length - 1 ; j++ ) {
      if ( A[ j ] > A[ j + 1 ] ) {
        [ A[ j ], A[ j + 1 ] ] = [ A[ j + 1 ], A[ j ] ];
      }
    }
  }

console.log('Array acomodado: '+ A)