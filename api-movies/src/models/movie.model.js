import movies from '../../src/mock/movies.json' with {type: 'json'}


export default class MovieModel {

    static getAllMovies = async () => {
        return movies
    }

    static getMovieById = async (id) => {

        const movie = movies.find(movie => {

            return movie.id == id // uuid
        })

        return movie
    }

    static createMovie = async (movie) => {

        //TODO: insert SQL
        // iniciar una transacción
        // obtener los campos para la pelicula
        //insertar la pelicula
        //obtener el id de la pelicula
        //insertar en la tabla de generos y directos la relación
        //entre su ID y el de la pelicula
        // finalizar la transacción
        // retornar la pelicula insertada

        movies.push(movie)

        return movie
    }

}



