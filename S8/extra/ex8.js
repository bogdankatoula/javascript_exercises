const fetchCharacters = async () => {
    try {
        const response = await fetch("https://hp-api.onrender.com/api/characters");
        const res = await response.json();
        // console.log(res);
        return res;
    }
    catch (error) {
        console.log("Error fetching characters:", error);
        return [];
    }
}
fetchCharacters();
// const fetchCharacters = () => {
//     fetch("https://hp-api.onrender.com/api/characters").then(response => response.json()).then(res=>{return res})
// }

const callAcharacter$$ = document.createElement("button");
callAcharacter$$.textContent = "Call a character";
document.body.appendChild(callAcharacter$$);
const main$$ = document.createElement("main");
document.body.appendChild(main$$);

let characterIndex = 0;  // Inicializa el contador de índices

// otra forma mas corta de hacer el fetch
//button$$.addEventListener("click", getCharacter);
// function getCharacter(){
    // console.log(21) para comprobar que funciona el la funcion dentro del evento click como esperamos
    // fetch("https://hp-api.onrender.com/api/characters").then(response => response.json()).then(res=>{console.log(res)})
// }

callAcharacter$$.addEventListener("click", async () => {
    try{
        const characters = await fetchCharacters();
        // console.log(characters);
        if (characterIndex < characters.length){
            const character = characters[characterIndex];
            const div$$ = document.createElement("div");
            main$$.appendChild(div$$);
            div$$.innerHTML = `<h2>${character.name}</h2>
            <img src="${character.image}" alt="${character.name}">
            `
            const remove$$ = document.createElement("button");
            div$$.appendChild(remove$$);
            remove$$.textContent = "Remove";
            remove$$.addEventListener("click", () => div$$.remove());
            characterIndex++;  // Incrementa el contador de índices
        }
        else {
            console.log("Ya se han mostrado todos los personajes.");
        }
    }
    catch(error){
        console.log("Error manejando datos de la api:", error)
    }
});