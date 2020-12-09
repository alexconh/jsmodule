const WEATHER = prompt('¿Cómo está el clima?  \na. Soleado \nb. Lluvioso \nc. Nevando \nd. Nublado')
switch (WEATHER){
    case 'a':
        console.log('You are so golden')
        break
    case 'b':
        console.log('Rainy day')
        break
    case 'c': 
        console.log('Frosty the snowman')
        break
    case 'd':
        console.log('Catching clouds')
    default:
        const WEATHER_DESCRIPTION = prompt('Descríbe tu día')
        console.log(`${WEATHER_DESCRIPTION}`)
}