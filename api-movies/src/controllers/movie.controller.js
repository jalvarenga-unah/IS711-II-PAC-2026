
import { jsonResponse } from '../../src/helpers/json_response.js'
import MovieModel from '../models/movie.model.js'
import Movie from '../models/movie.model.js'

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
    if (!payload.title || payload.title.length < 2) {
        return res.status(400).json(jsonResponse({ message: 'El titluo es obligatorio y debe tener al menos 2 caracteres' }))
    }



    const newMovie = await MovieModel.createMovie(payload)



}