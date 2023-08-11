const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}];

const noCat = [];
for (const toy of toys) {
    if(!toy.name.toLowerCase().includes("gato")){ //si no incluye la palabra gato
        noCat.push(toy)} // introducir esos nombre en la nueva constante
     }
 console.log(noCat);