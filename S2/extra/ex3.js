const users = [
    {
      name: "Manolo el del bombo",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Mortadelo",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Super Lopez",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "El culebra",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];

// queremos relacionar los nombres de los sonidos (claves) con la cantidad de veces que aparecen (valores) por lo que creamos un objeto con {} en vez de un array. Los arrays son más apropiados para listas secuenciales de elementos
favoriteCount = {};
for (const user of users) {
    for (const favoriteSound in user.favoritesSounds) {
        // comprobamos si el sonido ya esta en el objeto favoriteCount
        if (favoriteSound in favoriteCount){
            // si ya existe, incrementamos su conteo en 1 en vez de añadirlo otra vez
            favoriteCount[favoriteSound]++;
        }
        else {
            // si no existe, lo agregamos al objeto con un conteo inicial de 1
            favoriteCount[favoriteSound] = 1;
        }   
        }
    }
// imprime el conteo de cada sonido favorito
for (const sound in favoriteCount) {
    console.log(`El sonido '${sound}' ha sido agregado ${favoriteCount[sound]} veces.`);
}