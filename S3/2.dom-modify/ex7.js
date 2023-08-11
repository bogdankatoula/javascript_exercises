const removeMe$$ = document.querySelectorAll(".fn-remove-me");
console.log(removeMe$$); // nos devuelve el array
for (const eliminame of removeMe$$) {
    console.log(eliminame); // nos devuelve cada propiedad
    eliminame.remove();
}