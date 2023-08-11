const parameter = (a = 10, b = 5) => a + b; // creamos constante para definir la funcion, despues la flecha indica que es funcion, y los parentesis indican los parametros y que por defecto, si no se dan valores, esos son los que se usaran. despues de la flecha, se indica lo que hay que hacer
console.log (parameter()); // hay que poner parentesis despues de la funcion para invocarla y que haga el calculo, en esos parentesis irian otros valores que se quieran usar
console.log(parameter(20)); // da valor al 1er parametro, el segundo usa el valor por defecto
console.log(parameter(5,7))