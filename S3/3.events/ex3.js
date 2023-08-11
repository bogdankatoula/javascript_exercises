const input$$ = document.querySelector("input");
function texto (event){
    console.log (event.target.value)
}
input$$.addEventListener("input", texto);