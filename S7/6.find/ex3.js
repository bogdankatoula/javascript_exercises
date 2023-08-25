const aliens = [{name: 'Zalamero', planet: 'Eden', age: 4029},{name: 'Paktu', planet: 'Andromeda', age: 32},{name: 'Cucushumushu', planet: 'Marte', age: 503021}];
const mutations = [{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}];

const alien = aliens.find(element=>element.name == "Cucushumushu");
const mutation = mutations.find(element=>element.name == "Porompompero");
console.log(alien, mutation);
// Añadir la propiedad mutation al objeto alien
alien.mutation = mutation;
console.log(alien);