const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const handleChange = (event) => {
    console.log(event);
    const filteredStreamers = streamers.filter(streamer => streamer.name.toLowerCase().includes(input$$.value.toLowerCase()))
    console.log(filteredStreamers);
}

const input$$ = document.querySelector('[data-function="toFilterStreamers"]');
// const input$$ = document.querySelector('input');

input$$.addEventListener('input', handleChange);

// otra forma parecida de hacerlo
//primera funcion para poder filtrar  y poner la condicion
// const filterstreamers = keyword => {
    //let filteredStreamers = steamers.filter(streamer =>streamer.name.toLowerCase().includes(keyword.toLowerCase()))
// console.log (filteredStreamers)}
// segunda funcion para establecer que lo introducido en el input es la condicion a filtrar
// const streamerInput = document.querySelector("input");
// streamerInput.addEventListener("input", event => {filterStremers(event.target.value)})
// se usa la constante filterStreamers para el evento que establece  el valor del caracter
