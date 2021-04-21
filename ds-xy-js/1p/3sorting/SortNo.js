
//2. sort - use JS Array.sort implementation
//   sort(d)
// -> d an array of random numbers
// <- the random numbers sorted
// verify is sorted
let A = Array.from({length: 10}, () => Math.floor(Math.random() * 20));
console.log('Array inicial: '+ A)

A.sort();

console.log('Array acomodado: '+ A)