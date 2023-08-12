const input$$ = document.querySelector("input");
function focusEvent (event){
    console.log (event.target.value);
}
input$$.addEventListener("focus", focusEvent);