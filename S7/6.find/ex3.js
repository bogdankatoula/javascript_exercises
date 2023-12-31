const aliens = [{name: 'Zalamero', planet: 'Eden', age: 4029},{name: 'Paktu', planet: 'Andromeda', age: 32},{name: 'Cucushumushu', planet: 'Marte', age: 503021}];
const mutations = [{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}];

const foundAlien = aliens.find(element=>element.name == "Cucushumushu");
const foundMutation = mutations.find(element=>element.name == "Porompompero");
console.log(foundAlien, foundMutation);
// Añadir la propiedad mutation al objeto alien
foundAlien.mutation = foundMutation;
console.log(foundAlien);
//otra forma con spread operator creando nueva constante en vez de modificar la actual
// const newSuperAlien = {...foundAlien, mutation: founMutation};
// console.log(newSuperAlien);