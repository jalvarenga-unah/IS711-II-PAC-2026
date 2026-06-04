
// Objeto de JS que me permite trabajar con tareas asincronas

// Pendiente
// Aceptada
// Rechazada



// NodeJS es mono-hilo

const miPromesa = () => {
    return new Promise((resolve, reject) => {

        const randNumber = Math.random() * 10

        if (randNumber < 5) {
            resolve(true) // que es elvalor que está obteniendo al completar la promesa            
        }

        reject(`La tarea falló con ${randNumber}`)

    })
}

// asincrona y sincrona
miPromesa()
    .then((resultado) => {
        console.log('La promesa finalizó con éxito')
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        //este callback se ejecyta siempre al final
        console.log('fin de la promesa')
    })


fetch('https://fakestoreapi.com/products')
    .then((response) => {
        return response.json() //ejecuta una nueva promesa
    }).then((data) => {
        console.log(data)
    })