import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config()// declara e inicializa las variables de entorno

// variables de entorno
const PORT = process.env.PORT || 3000

// movies, directors, actors

app.get('/', (req, res) => {
    res.send('Hola mundo')
})

app.listen(PORT, () => {
    console.log(`Servidor en marcha en: http://localhost:${PORT}`)
})