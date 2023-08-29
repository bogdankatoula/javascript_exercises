const callAcat$$ = document.createElement("button");
callAcat$$.textContent = "Call a character";
document.body.appendChild(callAcat$$);
const main$$ = document.createElement("main");
document.body.appendChild(main$$);

callAcat$$.addEventListener("click", getCat);

function getCat(){
    console.log(21) // para comprobar que funciona la funcion dentro del evento click como esperamos
    fetch("https://api.thecatapi.com/v1/images/search").then(response => response.json()).then(res=>{console.log(res);
    printCat(res[0]) // callback para no hacer todo dentro de la misma funcion, creamos la funcion mas abajo y luego la llamamos. Solo hay una posicion en el array que genera cada vez una imagen nueva
    })
}

// creamos la funcion y ponemos image como parametro que sera res[0] de la api cuando llamemos la funcion
function printCat(image){
    const div$$ = document.createElement("div");
    main$$.appendChild(div$$);
    const img$$ = document.createElement("img");
    div$$.appendChild(img$$);
    img$$.src = image.url;
    img$$.width = "500";
    const button$$ = document.createElement("button");
    div$$.appendChild(button$$);
    button$$.textContent = "Remove";
    button$$.addEventListener("click", ()=>div$$.remove());
}
