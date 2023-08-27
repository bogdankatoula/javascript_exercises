const getCharacters = async () => {
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
getCharacters();

const characters = getCharacters();
characters.then(characters => {
    console.log(characters);
    const main$$ = document.createElement("main");
    document.body.appendChild(main$$);
    for (let i = 0; i < characters.length; i++) {
        const character = characters[i];
        console.log(character);
        const div$$ = document.createElement("div");
        main$$.appendChild(div$$);
        div$$.innerHTML = `
        <h2>${character.name}</h2>
        <img src="${character.image}" alt="${character.name}">
        `
    }
})
.catch(error=>{
    console.log("Error manejando datos de la api:", error);
})



