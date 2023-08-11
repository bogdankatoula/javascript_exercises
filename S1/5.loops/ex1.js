for (let i = 0;  i <= 9; i++) {
    const element = i;
    console.log(i)
}
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

const frutas = ["pera", "manzana", "limon", "piña"];

for (let i = 0; i < frutas.length; i++) {
    const fruta = frutas [i];
    if (fruta==="limon"){
        console.log("esto es un limon")
    }
    else if (fruta === "pera"){
        console.log ("esto es una pera")
    }
    else {console.log("esto no es un limon ni una pera")
    }
}
// esto es una pera
// esto no es un limon ni una pera
// esto es un limon
// esto no es un limon ni una pera
console.log(frutas.length)



let coche = {
    color: "blanco",
    age: 20,
    itv: true,
    extras: ["aleron", "subwoofer"],
}

for (const propiedad in coche) {
    console.log("Tengo la propiedad de mi objeto", propiedad, "con valor", coche[propiedad]);
}
//Tengo la propiedad de mi objeto color con valor blanco
// Tengo la propiedad de mi objeto age con valor 20
// Tengo la propiedad de mi objeto itv con valor true
// Tengo la propiedad de mi objeto extras con valor [ 'aleron', 'subwoofer' ]

const arrayFrutas = [];
for (const fruta of frutas) {
    arrayFrutas.push(fruta)
}
console.log(arrayFrutas);
// [ 'pera', 'manzana', 'limon', 'piña' ]