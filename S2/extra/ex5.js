// funcion que simula lanzamiento de un dado. maxNum es el numero maximo que se puede obtener en la tirada
function rollDice(maxNum){
    // Math.random() genera un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo). Es decir, puede ser cualquier número mayor o igual a 0, pero estrictamente menor que 1.
    return Math.floor(Math.random()*maxNum)+1;
    // Math.floor() redondea el número hacia abajo al entero más cercano. Esto se hace para obtener un resultado entero
}
console.log(rollDice(10)); //Si llamamos rollDice(10), obtendríamos un número aleatorio entre 1 y 10, simulando un dado de 10 caras.
console.log(rollDice(6)); //al llamar a rollDice(6), obtendríamos un número aleatorio entre 1 y 6, simulando un lanzamiento de un dado de 6 caras.

//Si maxNum es 6, la funcion me retornara un numero aleatorio entre 0 y menor a 1, por ejemplo 0,5. Ahora se multiplica (0,5*6=3)+1, por lo que el resultado del dado en este caso sería 4, al ser num entero no redondea hacia abajo.
