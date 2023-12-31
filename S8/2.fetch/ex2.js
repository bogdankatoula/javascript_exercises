const input$$ = document.querySelector("input");
const button$$ = document.querySelector("button");

const h2$$ = document.createElement("h2");
document.body.insertBefore(h2$$, input$$);
h2$$.textContent = "Which country is your name from?";

// creamos elemento div que sera el contenedor padre de los resultados de busqueda. Nos sera util para eliminar los resultados anteriores al hacer nueva busqueda
const resultContainer$$ = document.createElement("div");
document.body.appendChild(resultContainer$$);

const handleClick = event => {
    event.preventDefault();
    // creamos bucle while para borrar todos los elementos hijos del contenedor div cuando hacemos nueva busqueda. Al hacer click, se revisa si hay hijos y se borran. Cuando ya no quedan hijos, se pasa a ejecutar el resto del codigo
    while (resultContainer$$.firstChild) {
        resultContainer$$.removeChild(resultContainer$$.firstChild);
    }
    const inputValue = input$$.value.trim();
    const baseUrl = `https://api.nationalize.io?name=${inputValue}`;
    fetch(baseUrl)
    .then(res=>res.json())
    .then(myJson=>{
        console.log(myJson);
        if(myJson.count !==0){
        const pCount$$ = document.createElement("p");
        resultContainer$$.appendChild(pCount$$);
        pCount$$.textContent = `Currently, ${myJson.count} people bear the name ${inputValue} in the world according to this database`;
        const buttonCount$$ = document.createElement("button");
        buttonCount$$.textContent = "X";
        buttonCount$$.addEventListener("click", () => {
            // remove se aplica directamente al elemento que se quiere eliminar
                pCount$$.remove();
                buttonCount$$.remove();
        });
        resultContainer$$.appendChild(buttonCount$$);
        const countriesAndChances = myJson.country;
            for (const countryAndChance of countriesAndChances){
                console.log(countryAndChance)
                const pCountry$$ = document.createElement("p");
                resultContainer$$.appendChild(pCountry$$);
                const buttonCountry$$ = document.createElement("button");
                buttonCountry$$.textContent = "X";
                buttonCountry$$.addEventListener("click", () => {
                    // removeChild se aplica al elemento padre y como argumento se pasa un unico hijo que se quiere eliminar
                    resultContainer$$.removeChild(pCountry$$);
                    resultContainer$$.removeChild(buttonCountry$$);
                });
                resultContainer$$.appendChild(buttonCountry$$);
                const chance = countryAndChance.probability;
                const country = countryAndChance.country_id;
                pCountry$$.textContent = `The name ${inputValue} has ${chance} chances to come from ${country}`;
                }
        }
        else{
            const pNotFound$$ = document.createElement("p");
            resultContainer$$.appendChild(pNotFound$$);
            pNotFound$$.textContent = `Unfortunately, the name ${inputValue} doesn't exist in our database`; 
        }
    })
    .catch(error=>console.log(error));
};
button$$.addEventListener("click", handleClick);