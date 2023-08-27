const getPlanets = async () => {
    try {
        const response = await fetch("http://localhost:3000/planets");
        const planets = await response.json();
        // console.log(res);
        return planets;
    }
    catch (error) {
        console.log("Error fetching planets:", error);
        return [];
    }
}
const getCharacters = async idPlanet => {
    try {
        const response = await fetch(`http://localhost:3000/characters?idPlanet=${idPlanet}`);
        const characters = await response.json();
        // console.log(res);
        return characters;
    }
    catch (error) {
        console.log("Error fetching characters:", error);
        return [];
    }
}
const planets = getPlanets();
planets.then(planets => {
    console.log(planets);
    const planets$$ = document.querySelector('[data-function="planets"]');
    const search$$ = document.querySelector('[data-function="search"]');
    for (let i = 0; i < planets.length; i++) {
        const planet = planets[i];
        console.log(planet);
        const planet$$ = document.createElement("div");
        planets$$.appendChild(planet$$);
        planet$$.innerHTML = `
        <h3>${planet.name}</h3>
        <img class="planetImg" src="${planet.image}" alt="${planet.name}">
        `
        // asignar id a cada planeta segun el id de la api
        planet$$.id = planet.id;
        planet$$.addEventListener("click", async () => {
            try{
                // Obtener los personajes del planeta seleccionado
                const characters = await getCharacters(planet$$.id);
                // Seleccionar el contenedor de personajes en el DOM
                const characters$$ = document.querySelector('[data-function="characters"]');
                // Limpiar el contenido anterior
                characters$$.innerHTML = "";
                search$$.innerHTML = "";
                const input$$ = document.createElement("input");
                input$$.setAttribute("type", "text");
                input$$.setAttribute("placeholder", "Search by name");
                search$$.appendChild(input$$);
                // Agregar personajes al DOM
                const displayCharacters = characters => {characters.forEach(character => {
                const character$$ = document.createElement("div");
                character$$.innerHTML = `
                <h4>${character.name}</h4>
                <img src="${character.avatar}" alt="${character.name}">
                `;
                 // Agregar evento click para mostrar/ocultar descripción
                 character$$.addEventListener("click", () => {
                    const description$$ = document.createElement("p");
                    description$$.textContent = character.description;
                    
                    // Remover descripción anterior si existe
                    const existingDescription = character$$.querySelector("p");
                    if (existingDescription) {
                        existingDescription.remove();
                    } else {
                        character$$.appendChild(description$$); // Mostrar descripción
                    }
                });
                characters$$.appendChild(character$$);
                    });
                }
                // mostrar todos los personajes inicialmente
                displayCharacters(characters);
                input$$.addEventListener("input", () => {
                    const inputValue = input$$.value.trim().toLowerCase();
                    const filteredCharacters = characters.filter(character =>
                    character.name.toLowerCase().includes(inputValue)
                     );
                     // Limpiar el contenido y mostrar personajes filtrados
                    characters$$.innerHTML = "";
                    displayCharacters(filteredCharacters);
                })
            }
            catch (error) {
                console.log("Error handling characters click event:", error);
            }    
        });
    };
})
.catch(error=>{
    console.log("Error manejando datos de la api:", error);
})