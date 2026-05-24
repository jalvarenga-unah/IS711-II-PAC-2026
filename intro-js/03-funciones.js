function saludar() {
    console.log('Holaaaa')
}

// saludar = 'Que tal?'

const saludo = saludar

console.log(saludar)
saludo()


// funciones anonimas
// const suma = function (a, b, c) {
//     return a + b + c
// }

//arrow function
const suma = (a, b, c) => a + b + c

const multi = function ({ n1, n2 }) {


    const parsedN1 = Number(n1)
    const parsedN2 = Number(n2)

    // convirtiendo a un numero - > NaN
    if (isNaN(parsedN1)) {
        // if (typeof n1 !== 'number') {
        throw 'n1 debe ser un numero' // generar una excepcion
    }

    if (isNaN(parsedN2)) {
        throw 'n2 debe ser un numero' // generar una excepcion
    }

    return parsedN1 * parsedN2
}

// const multi = ({ n1, n2 }) => n1 * n2


const params = {
    n1: 4,
    n2: 7,
    n3: "oawsd"
}

console.log(suma(2, 3, 4))
console.log(multi({ n2: 8, n1: '4' })) // parametros con nombre