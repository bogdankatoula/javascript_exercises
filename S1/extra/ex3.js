const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];

const peliculaPequeña = [];
const peliculaMediana = [];
const peliculaGrande = [];
for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    // console.log(movie)
    if (movie.durationInMinutes<100){
        peliculaPequeña.push(movie)
    }
    else if ((movie.durationInMinutes>=100) && (movie.durationInMinutes<200)){
        peliculaMediana.push(movie)
    }else {
        peliculaGrande.push(movie)
    }
}
console.log("Peliculas pequeñas:", peliculaPequeña);
console.log("Peliculas medianas:", peliculaMediana);
console.log("Peliculas grandes:", peliculaGrande);