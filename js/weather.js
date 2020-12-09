//const WEATHER = prompt('¿Cómo está el clima?  \na. Soleado \nb. Lluvioso \nc. Nevando \nd. Nublado')
//switch (WEATHER){
//    case 'a':
//        console.log('Dale play a Golden de Harry Styles')
//        break
//    case 'b':
//        console.log('Podrías escuchar Rainy day de Coldplay')
//        break
//    case 'c': 
//        console.log('Cantemos Frosty the snowman')
//        break
//    case 'd':
//        console.log('Dale play a Catching clouds de Ed Sheppard')
//    default:
//        const WEATHER_DESCRIPTION = prompt('Descríbe tu día')
//        console.log(`${WEATHER_DESCRIPTION}`)
//}

const WEATHER = prompt('¿Cómo está el clima?  \na. Soleado \nb. Lluvioso \nc. Nevando \nd. Nublado')

if (WEATHER === 'a') {
    console.log('Dale play a Golden de Harry Styles')
} else if (WEATHER === 'b') {
    console.log('Podrías escuchar Rainy day de Coldplay')
} else if (WEATHER === 'c') {
    console.log('Cantemos Frosty the snowman')
} else if (WEATHER === 'd') {
    console.log('Dale play a Catching clouds de Ed Sheppard')
} else {
    const WEATHER_DESCRIPTION = prompt('¿Describime tu día?')
    console.log(WEATHER_DESCRIPTION)
}