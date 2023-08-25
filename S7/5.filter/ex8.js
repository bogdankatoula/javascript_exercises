const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const input$$ = document.querySelector('[data-function="toFilterStreamers"]'); // no puede llevar comillas doble en data function y la funcion, uno de los dos debe llevar comillas simples
const button$$ = document.querySelector('[data-function="toShowFilterStreamers"]');

const handleChange = () => {
    // console.log(event); a modo de comprobacion
    const filteredStreamers = streamers.filter(streamer => streamer.name.toLowerCase().includes(input$$.value.toLowerCase())) // para que no afecten mayusculas o minusculas cuando se escriba por usuario
    console.log(filteredStreamers);
}

input$$.addEventListener('input', handleChange); // recoge la informacion introducida por usuario e invoca a la funcion
button$$.addEventListener("click", handleChange); // muestra solo los streamers filtrados cuando hagamos click en el button

// otra forma de hacerlo para que solo muestre por consola cuando hacemos click en el boton
// const input$$ = document.querySelector('[data-function="toFilterStreamers"]');
// const button$$ = document.querySelector('[data-function="toShowFilterStreamers"]');
// let filteredStreamer = [];

// const handleInput = ev => {
//     const inputStreamer = ev.target.value.trim().toLowerCase();

//     filteredStreamer = streamers.filter(streamer => streamer.name.toLowerCase().includes(inputStreamer));
// };

// const handleClick = () => {console.log(filteredStreamer);
// };

// input$$.addEventListener("input", handleInput);
// button$$.addEventListener("click", handleClick);