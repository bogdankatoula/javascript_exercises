const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

for (const country of countries) {
const div$$ = document.createElement("div");
document.body.appendChild(div$$); 
const h4$$ = document.createElement("h4");
div$$.appendChild(h4$$);
h4$$.textContent = country.title;
const img$$ = document.createElement("img");
div$$.appendChild(img$$);
img$$.setAttribute("src", country.imgUrl);
// div$$.innerHTML = `<h4>${country.title}</h4><img src="${country.imgUrl}"/>`;
const buttonRemove$$ = document.createElement("button");
div$$.appendChild(buttonRemove$$);
buttonRemove$$.textContent = "Eliminar";
function removeElement () {
    div$$.remove();
}
buttonRemove$$.addEventListener("click", removeElement);
// button$$.addEventListener('click', function () {
//     div$$.remove();
// })
}
const button$$ = document.querySelector("button");
function removeLastElement (){
    const allDiv$$ = document.querySelectorAll("div");
    allDiv$$[allDiv$$.length-1].remove();
}
button$$.addEventListener("click", removeLastElement);