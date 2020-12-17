console.log ('Reduce Exercises')

searchOcurrence = (arrayToSearch, searchItem) => {
    let ocurrence = arrayToSearch.reduce((accumulator, currentValue) => currentValue === searchItem ? 
        accumulator+=1 
        :
        accumulator,0)
    return ocurrence
}

console.log(searchOcurrence(['a', 'c', 'd', 'c', 'c'], 'c'))

arrayOriginal = ['en','algun','lugar','de','un','gran','país']
arrayReduced = arrayOriginal.reduce((accumulator, currentValue) => accumulator + currentValue + ' ','')
console.log (arrayReduced)

