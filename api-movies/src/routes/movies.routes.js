import { Router } from 'express'
import { getAllMovies, getMovieById, createMovie } from '../controllers/movie.controller.js'

const moviesRouter = Router()

moviesRouter.get('/', getAllMovies)
// /movies/1
moviesRouter.get('/:id', getMovieById)
moviesRouter.post('/', createMovie)


export default moviesRouter