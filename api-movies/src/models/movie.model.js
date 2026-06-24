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

}



