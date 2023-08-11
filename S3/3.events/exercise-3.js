function handleChange(event){
    console.log(event.target.value);
}

const input$$ = document.querySelector('input');

input$$.addEventListener('input', handleChange);




const input$$ = document.querySelector("input");
function texto (event){
    console.log (event.target.value)
}
input$$.addEventListener("input", texto);