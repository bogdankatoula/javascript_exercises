const div$$ = document.querySelectorAll("div")[1]; // se seleccionan ambos div del html y se indica que se refiere al segundo
const p$$ = document.createElement("p");
p$$.textContent = 'Voy en medio!';
document.body.insertBefore(p$$, div$$); // se indica que el parrafo se quiere insertar antes del segundo div