const numeros = [1, 2, 3, 4, 5] // inmutable -> [1, 2, 3, 5]

const mascota = {
    edad: 4
}

//desestructuración
// [1, 2 ,3] -> 1 2 3
const copia_numeros = [...numeros]
// copia_numeros.push(...numeros)

//eliminar una propiedad
delete mascota.edad
mascota.nombre = 'Apolo'

let nombre = 'Juan'

nombre = 'Enrique'

// numeros.pop()
const index = numeros.indexOf(4)
const numeros_eliminados = numeros.splice(index) // muta el arreglo original
copia_numeros.pop()
// const nueva_lista_numeros = numeros.toSpliced(index, 1) // no modifica el arreglo original



console.log(typeof nombre)
console.log(numeros)
console.log(numeros.length)
// console.log(nueva_lista_numeros)
console.log(mascota)
console.log(index)
// numeros = 1234 // ❌


console.log("numeros: ", numeros)
console.log("copia numeros: ", copia_numeros)
console.log(1, 2)