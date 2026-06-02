const postres = [
    {
        nombre: 'brownies',
        precio: 80
    },
    {
        nombre: 'Pie de limon',
        precio: 100
    },
    {
        nombre: 'cheesecake',
        precio: 180
    },
]

const postresActualizados = postres.map((postre) => {

    const nuevoPostre = {
        ...postre,
        disponible: true,
        ingredientes: [
            { harina: '100 g', calorias: 20 },
            { azucar: '300 g', calorias: 80 },
            { aceite: '50 g', calorias: 40 },
        ]
    }

    //añadir el total de calorias
    nuevoPostre.calorias = nuevoPostre.ingredientes.

    return nuevoPostre
})

console.log(postresActualizados[0])