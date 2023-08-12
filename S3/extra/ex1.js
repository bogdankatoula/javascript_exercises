const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul$$ = document.createElement("ul");
document.body.appendChild(ul$$);
for (const country of countries) {
    const li$$ = document.createElement("li");
    li$$.textContent = country;
    ul$$.appendChild(li$$);
}