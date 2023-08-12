const input$$ = document.querySelector("input");
function handleInput (event){
    console.log (event.target.value);
}
input$$.addEventListener("input", handleInput);