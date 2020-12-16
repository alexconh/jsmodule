console.log('Array Methods')

const MyArray = [1, 4, 8]
MyArray.forEach(multiplayer =>{
    for(let i=1;i<=10;++i){
        console.log(`${multiplayer} x ${i} = ${multiplayer*i}`)
    }
})

console.log ('Dobles')

const arrayDoubles = [1, 2, 3]
let doubles = []
arrayDoubles.forEach(currentDouble => {
    doubles = doubles.concat(currentDouble*2)
    return doubles
})
console.log (doubles)

console.log ('Pares')
const arrayPairs = [1, 2, 3, 4]
let pairs = []
arrayPairs.forEach(currentNumber =>{
    if(currentNumber%2 == 0){
        pairs = pairs.concat(currentNumber)
    }
})
console.log(pairs)

console.log('letras')
const arrayStrings = ['hola', 'mundo']
let result = []
arrayStrings.forEach(currentWord =>{
    result = result.concat(currentWord[0] + currentWord[currentWord.length-1])
})
console.log(result)