import { Router } from 'express'
import movies from '../../src/mock/movies.json' with {type: 'json'}
import { jsonResponse } from '../../src/helpers/json_response.js'

// import { readFile, writeFile } from 'node:fs/promises'

const moviesRouter = Router()

moviesRouter.get('/', (req, res) => {
    res.json(jsonResponse({ message: 'Lisado de peliculas', data: movies }))
})

// /movies/1
moviesRouter.get('/:id', (req, res) => {

    const { id } = req.params

    const movie = movies.find(movie => {

        return movie.id == id // uuid
    })

    if (!movie) {
        return res.status(404).json(jsonResponse({
            status: 404,
            message: 'Pelicula no encontrada',
        }))
    }

    res.json(jsonResponse({
        message: 'Información de la pelicula',
        data: movie
    }))
})


export default moviesRouter