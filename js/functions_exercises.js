function tablas_de_multiplicar(string_name) {
    for (let i = 0; i < string_name.length; ++i) {
        for (let j = 1; j <= 10; ++j) {
            console.log(`${string_name[i]} x ${j} = ${parseInt(string_name[i]) * j}`)
        }
    }
}

function is_palindrome(string_to_compare) {
    let reversed = ''
    let string_aux = ''
    for (let i = string_to_compare.length - 1; i >= 0; i--) {
        if(string_to_compare[i]!=' '){
        reversed += string_to_compare[i]
        }
    }
    for (let i = 0; i < string_to_compare.length; i++) {
        if(string_to_compare[i]!=' '){
        string_aux += string_to_compare[i]
        }
    }
    if (string_aux === reversed) {
        console.log(`La frase ${string_to_compare} es un palíndromo`)
    } else {
        console.log(`La frase ${string_to_compare} no es un palíndromo`)
    }
}

function type_of_data(one, two){
    console.log(`el primer dato es:${typeof(one)}`)
    console.log(`el segundo dato es:${typeof(two)}`)
}

// tablas_de_multiplicar('987')
// is_palindrome('anita lava la tina')
// type_of_data('anita lava la tina', 15)