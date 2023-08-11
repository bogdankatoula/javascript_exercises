const button$$ = document.createElement("button");
button$$.id = "btnToClick"; // Añadir el ID "btnToClick" al boton
// button$$.classList.add("btnToClick");  en caso de querer agregar la clase "btnToClick" al boton
document.body.appendChild(button$$);

function boton (){
	console.log("Haz Click Aquí");
}
button$$.addEventListener("click", boton);