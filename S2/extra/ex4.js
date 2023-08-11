// La función findArrayIndex recibe un array de textos (array) y un texto específico (text) que se desea buscar dentro del array. 
function findArrayIndex(array, text) {
    // La función utiliza un bucle for para recorrer cada elemento del array y compara si el valor actual es igual al texto que se está buscando. 
    for (let i = 0; i < array.length; i++) {
        // comprobamos si el valor actual del array es igual al texto que buscamos
        if(array[i] === text){
            // si encontramos el valor, returnamos la posicion (indice) actual 
            return i;
        }
    }
    // si no encontramos el valor en todo el array, returnamos -1 para indicar que no se encontró
    return -1;
}
const array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
console.log(findArrayIndex(array, 'Mosquito')); // Debería imprimir 1
console.log(findArrayIndex(array, 'Ajolote'));  // Debería imprimir 3
console.log(findArrayIndex(array, 'Rana'));     // Debería imprimir -1, ya que "Rana" no está en el array

function removeItem (array, text){
    // creamos una variable index que sera el valor (indice) que nos devuelve la funcion findArrayIndex
    let index = findArrayIndex(array, text);
    // elimina el elemento del array conociendo su indice
    array.splice(index, 1);
    return array;
}
console.log(removeItem(array, "Mosquito"));