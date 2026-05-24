const numeros = [1, 2, 3, 4, 5]
const copia_numeros = [...numeros]

const name = 'Juan alvarenga'

// template strings
// console.log(` numeros:`, numeros)
// console.log(` copia_numeros: `, copia_numeros)


// const first = numeros[0]
// const second = numeros[1]

const [x, y, ...rest] = numeros

// console.log(x, y, rest)
// console.log(numeros)

const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
}

const { name: nombre, username, address } = user // =>  const nombre = user.name, { geo: { lat } }
// const nombre = user.name
const { geo } = address
const { lat } = geo

console.log(nombre)
console.log(username)
console.log(lat)
