const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

let totalVentas = 0;
// let en vez de const porque el valor 0 va a cambiar
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    totalVentas += product.sellCount;
    // sumar a totalVentas el sellCount de cada producto
}
console.log(totalVentas);

// otra forma
const totalSales = products.reduce((acc, product)=> acc + product.sellCount, 0);
console.log (totalSales);

// explicacion
// products.reduce(...): Estamos llamando al método reduce() en el array products.
// (acc, product) => acc + product.sellCount: Esta es la función de reducción que se pasará como argumento a reduce(). Toma dos parámetros: acc (acumulador) y product (el elemento actual del array). En este caso, la función suma el valor de sellCount del producto actual al acumulador acc.
// , 0: Este es el valor inicial del acumulador acc. En este caso, lo inicializamos en 0, lo que significa que la suma de ventas comenzará en 0.
// La función de reducción se aplica a cada elemento del array products en orden, y en cada iteración, el valor resultante se almacena en el acumulador acc para la siguiente iteración. Al final de todas las iteraciones, reduce() devuelve el valor final del acumulador, que en este caso es la suma total de las ventas (sellCount) de todos los productos en el array products.

// Finalmente, el resultado se almacena en la variable totalSales, y se imprime en la consola con console.log(totalSales).

// Es una forma concisa y elegante de obtener el total de ventas utilizando reduce() en lugar de un bucle for.

// Espero que esta explicación te haya sido útil. Si tienes más preguntas o necesitas más aclaraciones, no dudes en preguntar. ¡Estoy aquí para ayudarte!