function swap (array, index1, index2) {
    // comprobamos que los indices sean validos dentro del rango permitido, y si no, mostramos mensaje error
    if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
        throw new Error('Los índices están fuera del rango del array.');
      }
    // almacenamos el valor de array[index1] en variable
    const firstElement = array[index1];
    // ahora se sustituye el valor de array[index1]
    array[index1] = array[index2];
    // ahora array[index2] se sustituye por el valor almacenado en la variable que anteriormente fue array[index1]
    array[index2] = firstElement;
    return array;
}
const newArray = swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'], 0, 3)
console.log(newArray);