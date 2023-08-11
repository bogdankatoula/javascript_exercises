const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

for (let i = 0; i < foodSchedule.length; i++) {
    const food = foodSchedule[i];
    if(!food.isVegan)
        // food.isVegan==false
        {
        food.name = fruits.shift();
        // shift elimina el primer elemento del array y evita duplicados. pop elimina el ultimo elemento y no evita duplicados
        food.isVegan = true;
        // marcamos la nueva fruta como vegana, ya que por defecto, solo sustituyo el name, pero mantiene el valor original de isVegan:false
    }
}
console.log(foodSchedule);

   // for (let i = 0; i < foodSchedule.length; i++) {
    //     const food = foodSchedule[i];
    //     if(food.isVegan == false){
    //         const fruit = fruits.pop();
            // En lugar de simplemente asignar food.name = fruits.pop();, debes asegurarte de que la fruta que estás asignando a food.name no se encuentre ya en el array de foodSchedule. Esto evita duplicados.
            // if (!foodSchedule.some(item => item.name === fruit)) {
            //     food.name = fruit;
            //     food.isVegan = true;
            //   }
            // En lugar de food.isVegan == true;, debes utilizar el operador de asignación = para cambiar el valor de isVegan a true.
    //     }
    // }
    // console.log(foodSchedule);