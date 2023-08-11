const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const propiedad in alien) {
    console.log(propiedad, alien[propiedad]);     
}

//si hacemos alien.name accedemos a una propiedad concreta, pero con propiedades dinamicas/desconocidas variable[propiedad]

// otra forma de hacerlo
// for (const key in alien) {
//     console.log(`${key}: ${alien[key]}`); 
    //console.log(key + ": " + alien[key]); forma tradicional de expresar lo mismo
// }