console.log('month_days')
const MONTH = parseInt(prompt('Dame un número del 1 al 12'))
if (MONTH == 2){
    console.log(`Al mes número ${MONTH} le corresponden 28 días`)
} else if (MONTH<8){
    if (MONTH%2==0){
        console.log(`Al mes número ${MONTH} le corresponden 30 días`)
    } else {
        console.log(`Al mes número ${MONTH} le corresponden 31 días`)
    }
} else {
    if (MONTH%2==0){
        console.log(`Al mes número ${MONTH} le corresponden 31 días`)
    } else {
        console.log(`Al mes número ${MONTH} le corresponden 30 días`)
    }
}