const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const legends = streamers.filter(streamer => {
    if (streamer.gameMorePlayed.includes("Legends")){
        if(streamer.age > 35){
            // modificar la propiedad
            streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();}
    // Luego, en lugar de solo modificar la propiedad del streamer, debes también retornar true para indicar que este streamer debe incluirse en el nuevo arreglo.
        return true}
    // Si cualquiera de las dos condiciones no se cumple para un streamer, entonces debes retornar false para indicar que ese streamer no debe incluirse en el nuevo arreglo.
    else {
        // se puede poner return false, sin la expresion else
        return false
    }
});
console.log(legends);