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
    doubles.push(currentDouble*2)
    return doubles
})
console.log (doubles)

console.log ('Pares')
const arrayPairs = [1, 2, 3, 4]
let pairs = []
arrayPairs.forEach(currentNumber =>{
    if(currentNumber%2 == 0){
        pairs.push(currentNumber)
    }
    return pairs
})
console.log(pairs)

console.log('letras')
const arrayStrings = ['hola', 'mundo']
let result = []
arrayStrings.forEach(currentWord =>{
    result.push(currentWord[0] + currentWord[currentWord.length-1])
    return result
})
console.log(result)