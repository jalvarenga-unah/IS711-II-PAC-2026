import express from 'express'
import dotenv from 'dotenv'
import moviesRouter from './src/routes/movies.routes.js'

const app = express()
dotenv.config()// declara e inicializa las variables de entorno

// variables de entorno
const PORT = process.env.PORT || 3000

// movies, directors, actors

app.get('/', (req, res) => {
    res.send('Hola mundo')
})

//rutas de peliculas
app.use('/movies', moviesRouter)

app.listen(PORT, () => {
    console.log(`Servidor en marcha en: http://localhost:${PORT}`)
})