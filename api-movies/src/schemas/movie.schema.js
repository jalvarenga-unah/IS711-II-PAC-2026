import * as z from 'zod'

const movieSchema = z.object({
    id: z.uuidv4('El formato del ID es invalido'),
    title: z.string().min(2).max(100),
    description: z.string().min(20).max(500),
    director: z.array(z.uuidv4('El formato del ID es invalido'), "Debe ser una lista de directores").min(1, "minimo un director por favor"),
    genres: z.array(z.uuidv4()).min(1),
    poster_url: z.url()
})

export const validateMovie = (movie) => {

    return movieSchema.safeParse(movie)

}