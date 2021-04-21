//1. bubble - your implementation 
//   sort(d)
// -> d an array of random numbers
// <- the random numbers sorted
// verify is sorted
let A = Array.from({length: 10}, () => Math.floor(Math.random() * 10));
console.log('Array inicial: '+ A)

  for (let i = 0; i < A.length; i++ ) {
    for (let j = 0; j < A.length - 1 ; j++ ) {
      if ( A[ j ] > A[ j + 1 ] ) {
        [ A[ j ], A[ j + 1 ] ] = [ A[ j + 1 ], A[ j ] ];
      }
    }
  }

console.log('Array acomodado: '+ A)