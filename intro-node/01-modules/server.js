import express from "express"

// escuha peticiones y emitir respuestas
const server = express()
//definir que puerto es el que será escuchado
const PORT = 3000

// definicion de rutas
server.get('/products', (request, response) => {
    response.json([])
})

server.post('/products', (request, response) => {

    console.log(request.url)
    console.log(request.method)
    console.log(request.body)
    console.log(request.kqwjhsenfgdvlj)
    console.log(request.query)
    console.log(request.headers)



    response.status(201).json({
        "message": "producto creado"
    })
})

server.put('/products', (request, response) => {
    response.send('guardar un productso nuevo')
})

server.delete('/product', (request, response) => {
    response.send('guardar un producto nuevo')
})


server.get('/', (request, response) => {
    response.send('<h1>Hola mundo desde Express Js</h1>')
})


//empezar a escuchar
server.listen(PORT, () => {
    console.log('Server puesto en marcha')
})

