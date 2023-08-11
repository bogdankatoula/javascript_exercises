const data$$ = document.querySelectorAll('[data-function="testMe"]'); // para data function se pone corchetes y si por fuera se ponen dobles comillas, dentro se deben poner comillas únicas
console.log (data$$);

const data$$ = document.querySelectorAll('[data-function]');
console.log(data$$); 
// muestra un array de 4 etiquetas span que son los que tienen el atributo data-function

// usando la funcion getAttribute obtenemos el valor del atributo por consola, pero no el elemento html
const data$$ = document.querySelectorAll('[data-function]');
data$$.forEach(element => {
  const dataFunctionValue = element.getAttribute('data-function');
  console.log('El valor del atributo data-function es:', dataFunctionValue);
});
// El valor del atributo data-function es: testMe (x4)