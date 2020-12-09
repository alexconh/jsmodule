console.log('graded_exam')
const GRADE = parseInt(prompt('¿Cuál fue tu calificación? (de 0 a 100)'))

if (GRADE>89){
    console.log('Equivalencia: A')
} else if (GRADE>79 && GRADE<90){
    console.log('Equivalencia: B')
} else if (GRADE>69 && GRADE<80){
    console.log('Equivalencia: C')
} else if (GRADE>59 && GRADE<70){
    console.log('Equivalencia: D')
} else if (GRADE>49 && GRADE<60){
    console.log('Equivalencia: E')
} else {
    console.log('Equivalencia: F')
}