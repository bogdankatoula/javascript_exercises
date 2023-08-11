const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

const categorias = [];
for (const movie of movies) {
    // se consigue acceder a los elementos
    for (const category of movie.categories){
        console.log(category);
        // si el nuevo array no tiene esa category, entonces agregarla a categorias
        if (!categorias.includes(category)){
            categorias.push(category)
        }
    }
}
console.log(categorias);