console.log('is largest')

const NUMBER_ONE = prompt('¿Dame un numero?')
NUMBER_ONE = parseInt(NUMBER_ONE)
const NUMBER_TWO = parseInt(prompt('¿Dame otro numero?'))

if (NUMBER_ONE > NUMBER_TWO) {
    console.log(`${NUMBER_ONE} es el mayor`)

} else if(NUMBER_ONE === NUMBER_TWO) {
    console.log(`${NUMBER_ONE} es igual a ${NUMBER_TWO}`)

} else {
    console.log(`${NUMBER_TWO} es el mayor`)
}