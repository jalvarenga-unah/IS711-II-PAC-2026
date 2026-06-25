
import { jsonResponse } from '../../src/helpers/json_response.js'
import MovieModel from '../models/movie.model.js'
import Movie from '../models/movie.model.js'
import { validateMovie } from '../schemas/movie.schema.js'

export const getAllMovies = async (req, res) => {

    try {
        const movies = await Movie.getAllMovies()

        res.json(jsonResponse({ message: 'Lisado de peliculas', data: movies }))
    } catch (e) {
        res.status(500).json(jsonResponse({ status: 500, message: e, data: null }))
    }
}

export const getMovieById = async (req, res) => {

    const { id } = req.params

    //sanear los parametros a enviar al modelo
    const movie = await Movie.getMovieById(id)

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
}
export const createMovie = async (req, res) => {

    const payload = req.body

    //early return 

    //validar el objeto del body
    const { success, data, error } = validateMovie(payload)

    if (!success) {
        return res.status(400).send(error.message)
    }

    const newMovie = await MovieModel.createMovie(payload)



}