const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];
const values = users.map(user => user.name[0] === 'A' ? 'Anacleto' : user.name);
console.log(values)

//otra forma de hacerlo

//const newUsers = users.map(function(user) {
  //  if (user.name[0] === "A"){
    //    user.name = "Anacleto"} 
    // return user.name})
//console.log (newUsers);