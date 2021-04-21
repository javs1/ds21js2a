//
// https://ideone.com/sDH0Os
//
//your name and group here FRANCISCO JAVIER VERDUZCO VARGAS 2°A
let A = Array.from({length: 10}, () => 
String.fromCharCode(Math.floor(Math.random() * (90 - 65)) + 65)
+String.fromCharCode(Math.floor(Math.random() * (90 - 65)) + 65)
+String.fromCharCode(Math.floor(Math.random() * (90 - 65)) + 65)
+String.fromCharCode(Math.floor(Math.random() * (90 - 65)) + 65));
document.write('Array inicial: '+ A)
let encontrar = A.indexOf(prompt('introduce el nombre a buscar'));
console.log(encontrar)