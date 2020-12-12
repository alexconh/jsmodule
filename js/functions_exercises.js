function tablas_de_multiplicar(string_name) {
    for (let i = 0; i < string_name.length; ++i) {
        for (let j = 1; j <= 10; ++j) {
            console.log(`${string_name[i]} x ${j} = ${parseInt(string_name[i]) * j}`)
        }
    }
}

tablas_de_multiplicar('987')