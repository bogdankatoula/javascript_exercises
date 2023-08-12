const input$$ = document.querySelector("input");
function handleFocus (event){
    console.log (event.target.value);
}
input$$.addEventListener("focus", handleFocus);