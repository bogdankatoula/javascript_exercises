const goodProducts = [];
const badProducts = [];
const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];
for (let i = 0; i < products.length; i++) {
    movies = products[i];
    if (movies.sellCount>20){goodProducts.push(movies.name)}
    else {badProducts.push(movies.name)}
}
console.log ("Good Products: " + goodProducts)
console.log ("Bad Products: " + badProducts)


// // forma parecida de hacerlo
// for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     if (product.sellCount > 20) {
//         goodProducts.push(product);
//     }
//     else {badProducts.push(product);
//     }
// }
// console.log("Productos con más de 20 ventas:", goodProducts, "Products con 20 o menos ventas:", badProducts);