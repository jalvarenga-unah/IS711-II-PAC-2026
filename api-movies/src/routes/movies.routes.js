import { Router } from 'express'
import { getAllMovies, getMovieById } from '../controllers/movie.controller.js'

const moviesRouter = Router()

moviesRouter.get('/', getAllMovies)
// /movies/1
moviesRouter.get('/:id', getMovieById)


export default moviesRouter