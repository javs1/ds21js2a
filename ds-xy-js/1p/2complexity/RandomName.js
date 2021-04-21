//4. random name
//   randomName()
// -> 
// <- one random name
// ie nameXYZ
let limite = parseInt(prompt('Introduce de cuantas letras sera el nombre'));
let nombre = 'Nombre: ';
for(let i=1;i <= limite;i++){
    nombre+= String.fromCharCode(Math.floor(Math.random() * (90 - 65) ) + 65);
}
console.log('El nombre aleatorio es: '+nombre)