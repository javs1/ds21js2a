//
// https://ideone.com/00FoC9
//
// You can use the console window at the bottom
//
// gcd - greatest common divisor
// also known as Euclid's algorithm
//
 
//your name and group here FRANCISCO JAVIER VERDUZCO VARGAS 2°A
 
gcd=(a, b) =>{
    let u = a
    let v = b
    let r = 0
    let i = 0
    while (u > 0) {
        if (u < v) {
            r = u
            u = v
            v = r
        }
        u -= v
        i++
    }
    console.log('print here how many steps it took: '+i)
    return v
}
 
//verify output is correct
let t0 = performance.now()
 
console.log(gcd(15, 3))
 
let t1 = performance.now()

console.log('print here how much time it took= '+ (t1 - t0))

 
//then try
//console.log(gcd(3, 2))
//console.log(gcd(1000000005, 999999999))
//can we do better ? (yes/no)
 
//see platform for more instructions