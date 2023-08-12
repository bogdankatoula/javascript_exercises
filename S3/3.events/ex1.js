const button$$ = document.createElement("button");
button$$.id = "btnToClick";
button$$.textContent = "Apúntate";
document.body.appendChild(button$$);
function handleClick (event){
    console.log (event)
}
button$$.addEventListener("click", handleClick);