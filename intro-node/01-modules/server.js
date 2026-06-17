import express from "express"

// escuha peticiones y emitir respuestas
const server = express()

//quitar el encabezado en la respuesta
server.disable('x-powered-by')

//definir que puerto es el que será escuchado
const PORT = 3000

//middlewares
server.use(express.json()) // interceptar los paquetes de datos y transformarlos a formato json, ademas de integrarlo al body de la petición

// definicion de rutas
server.get('/products', (request, response) => {
    response.json([])
})

server.post('/products', (request, response) => {

    console.log(request.url)
    console.log(request.method)

    console.log(request.body) // {}

    console.log(request.query)
    console.log(request.headers)

    response.status(201).json({
        "message": "producto creado"
    })
})

server.put('/products/:id', (request, response) => {

    console.log(request.params)
    const { id } = request.params

    response.json({
        message: `Producto id ${id} actualziado`
    })
})

server.delete('/product/:id', (request, response) => {
    response.send('guardar un producto nuevo')
})


server.get('/', (request, response) => {
    response.send('<h1>Hola mundo desde Express Js</h1>')
})

// ruta por default
server.use((request, response) => {
    response.status(404).json({
        message: `La ruta \'${request.path}\' no existe`
    })
})


//empezar a escuchar
server.listen(PORT, () => {
    console.log('Server puesto en marcha')
})

