const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul$$ = document.createElement("ul");

for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    const li$$ = document.createElement("li");
    li$$.textContent = country;
    ul$$.appendChild(li$$);
}
document.body.appendChild(ul$$);