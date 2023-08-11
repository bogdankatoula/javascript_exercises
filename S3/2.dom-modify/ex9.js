const divs$$ = document.querySelectorAll(".fn-insert-here");
for (const div$$ of divs$$) {
    const p$$ = document.createElement("p");
    p$$.textContent = 'Voy dentro!';
    div$$.appendChild (p$$);
}

// otra forma de hacerlo

// const divs$$ = document.querySelectorAll(".fn-insert-here");
// const p$$ = document.createElement("p");
// p$$.textContent = "Voy dentro!";
// divs$$.forEach(function(div$$) // div => 
// {
//     const clonedP = p$$.cloneNode(true);
//     div$$.appendChild(clonedP);
// });