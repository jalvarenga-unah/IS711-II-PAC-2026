
const numeros = [1, 2, 3, 4, 5]
const nombre = "Juan"
const mascota = {
    nombre: 'Apolo',
    edad: 4
}

for (const numero of nombre) {
    console.log(numero)
}

// console.log(Object.entries(mascota))

const listMascota = Object.entries(mascota)

for (const [key, value] of listMascota) {
    if (key === 'nombre') {
        console.log(key)
        console.log(value)
    }
}

const imprimir = ({ perro, gato }) => console.log(`Valor: ${perro}, indice: ${gato}`)

numeros.forEach((value, index) => {
    imprimir({ perro: value, gato: index })
})

// numeros.forEach((value, index, array) => {
//     console.log(` valor: ${value}, indice: ${index}, array: ${array} `)
// })


