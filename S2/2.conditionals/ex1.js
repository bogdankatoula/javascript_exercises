const alumns = [
    { name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    { name: 'Lucia Aranda', T1: true, T2: false, T3: true }, 
    { name: 'Abel Cabeza', T1: false, T2: true, T3: true }, 
    { name: 'Alfredo Blanco', T1: false, T2: false, T3: false }, 
    { name: 'Raquel Benito', T1: true, T2: true, T3: true }
]

for (let i = 0; i < alumns.length; i++) {
    const student = alumns[i];
    // Verificar si el estudiante tiene al menos dos trimestres aprobados
    if (student.T1 + student.T2 + student.T3 >= 2) {
      student.isApproved = true; // Asignar true a la propiedad isApproved
    } else {
      student.isApproved = false; // Asignar false a la propiedad isApproved
    }
  }
  console.log(alumns);

// otra forma de hacerlo

// for (let i = 0; i < alumns.length; i++) {
//     const student = alumns[i];
//     if (((student.T1 && student.T2) === true) || ((student.T1 && student.T3) === true) || ((student.T2 && student.T3) === true)){
//         student.isApproved = true;
//     }
//     else{
//         student.isApproved = false;
//     }
// }
// console.log(alumns);

// for (let i = 0; i < alumns.length; i++) {
//     const student = alumns[i];
//      let approved = 0;   
//    approved = student.T1 ? approved + 1 : approved;
//    approved = student.T2 ? approved + 1 : approved;
//    approved = student.T3 ? approved + 1 : approved;
//    student.isApproved = approved >= 2;
// }
// console.log (alumns);

// otra forma de hacerlo 
// if(student.T1){
//     approved++;
// }
// if(student.T2){
//     approved++;
// }
// if(student.T3){
//     approved++;
// }
// student.isApproved = approved >= 2;
// }
// console.log(alumns);