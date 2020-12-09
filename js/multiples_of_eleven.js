console.log('multiples of eleven')

const NUMBER = parseInt(prompt('Elige un número entre 1 y 100'))
if (NUMBER%2 === 0 && NUMBER%11 === 0){
    console.log(`${NUMBER} es múltiplo de 2 y de 11`)
} else if (NUMBER%2 === 0 && NUMBER%11 != 0){
    console.log(`${NUMBER} es múltiplo de 2 pero no de 11`)
} else if (NUMBER%2 != 0 && NUMBER%11 === 0){
    console.log(`${NUMBER} es múltiplo de 11 pero no de 2`)
} else {
    console.log(`${NUMBER} no es múltiplo de 11 ni de 2`)
}