const focus$$ = document.querySelector("input");
function texto (event){
    console.log (event.target.value)
}
focus$$.addEventListener("focus", texto);   