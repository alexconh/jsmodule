/* Imprimir en consola la tabla del 7
7 x 1 = 7 */
console.log('Tabla del 7')
for (let i=1; i<=10; ++i){
    console.log(7*i)
}
/* imprimir en consola los múltiplos de 3 y 7  que se encuentran entre el 1 y el 100
3,6,7,9,12,14,15.... */
console.log('Múltiplos de 3 y 7')
for (let i=1;i<=100; ++i){
    if(i%3===0 || i%7===0){
        console.log(i)
    }
}
/* imprimir en consola la cantidad de espacios que se encuentran en una cadena de texto
“en un lugar de la mancha” -> 5 */
console.log('Contando espacios')
const STRING_TO_VERIFY='en un lugar de la mancha'
/* let spaces = 0 
for (let i=0; i <= STRING_TO_VERIFY.length; ++i){
    if(STRING_TO_VERIFY[i] === ' '){
        ++spaces
    }
}
console.log(spaces) */
console.log(STRING_TO_VERIFY.split(' ').length-1)
/* imprimir en consola la cantidad de vocales que se encuentran en una cadena de texto
“Hola mundo” -> 4 */
console.log('Contando vocales')
const VOCALS_TO_COUNT='Hola mundo'
let vocals = 0 
for(let i=0; i <= VOCALS_TO_COUNT.length; ++i){
    switch (VOCALS_TO_COUNT[i]){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            ++vocals
        break
    }
}
console.log(vocals)