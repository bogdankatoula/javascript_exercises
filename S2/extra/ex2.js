const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let volumeTotal = 0;
let soundCount = 0;
for (const user of users) {
    for (const favoriteSound in user.favoritesSounds) {
        console.log(favoriteSound); 
        //favoriteSound es waves, shower, train etc
        console.log(user.favoritesSounds);
        //user.favoritesSounds es cada objeto waves: {format:"mp3, volume:30"}
        const volume = user.favoritesSounds[favoriteSound].volume;
        //con user.favoritesSounds[favoriteSound].volume accede1mos al valor del volumen y lo almacenamos en la variable volume para no tener que escribir todo eso todo el rato
        volumeTotal += volume;
        // por cada vuelta se van sumando los valores de volume y se acumulan en volumeTotal
        soundCount++;
        //soundCount va sumando el numero de favoriteSound y por cada vuelta suma 1. Sirve para hacer la media
        }
    }
const mediaVolume = volumeTotal/soundCount; 
//volumeTotal es 687 y soundCount es 12
console.log(mediaVolume);
//mediaVolume es 57.25