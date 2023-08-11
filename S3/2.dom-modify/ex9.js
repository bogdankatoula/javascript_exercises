const divs$$ = document.querySelectorAll(".fn-insert-here");
// console.log(div$$)
for (let i = 0; i < divs$$.length; i++) {
    const div = divs$$[i];
    const p$$ = document.createElement("p");
    p$$.textContent = 'Voy dentro!';
    div.appendChild (p$$);
    
}