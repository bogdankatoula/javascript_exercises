const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];
totalSales = 0;
for (let i = 0; i < products.length; i++) {
    product = products [i];
    totalSales += product.sellCount;
}
console.log (totalSales / products.length);

// otra forma
// totalVentas = 0;
// for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     totalVentas += product.sellCount;
// }
// mediaVentas = totalVentas/products.length;
// console.log(mediaVentas);