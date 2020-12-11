console.log('Ejercicios de clase')
console.log('Tabla del 8 en reversa')
for(let i=10; i>=1; i--){
    console.log(`8 x ${i} = ${8*i}`)
}

console.log('Numeros pares entre 1 y 100')
for(let i=1; i<=100; ++i){
    if(i%2===0){
        console.log(i)
    }
}

console.log('String en reversa')
const STRING_TO_REVERT = 'reverse'
let reversed = ''
for(let i=STRING_TO_REVERT.length-1; i>=0; i--){
    reversed+=STRING_TO_REVERT[i]
}
console.log(reversed)