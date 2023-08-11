const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul$$ = document.createElement("ul");
for (const app of apps) {
    const li$$ = document.createElement("li");
    li$$.textContent = app;
    ul$$.appendChild(li$$);
}
document.body.appendChild(ul$$);

// textContent es una propiedad que permite establecer o obtener el contenido de texto de un elemento. Al utilizar textContent, cualquier etiqueta HTML dentro del contenido se trata como texto y no se interpretará como HTML. Por lo tanto, si necesitas agregar texto plano a un elemento, es más seguro y eficiente utilizar textContent. Además, textContent evita posibles problemas de seguridad al prevenir la inyección de código malicioso, ya que no interpreta las etiquetas HTML dentro del contenido.

// una forma menos eficiente pero que también funciona
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
// const ul$$ = document.createElement("ul");
// for (let i = 0; i < apps.length; i++) {
//     const app = apps[i];
//     const li$$ = document.createElement("p");
//     ul$$.appendChild(li$$);
//     li$$.innerHTML = [app];
// }
// document.body.appendChild(ul$$);

// la notación li$$.innerHTML = [app]; podría generar un array con un solo elemento en lugar de simplemente asignar el texto directamente.
// Si necesitas agregar contenido que incluye etiquetas HTML, como párrafos, enlaces o estilos, entonces innerHTML es la opción adecuada. Sin embargo, debes tener cuidado al utilizar innerHTML, especialmente cuando el contenido es dinámico y proviene de fuentes externas, ya que puede exponer a la aplicación a ataques de inyección de código si no se valida correctamente.