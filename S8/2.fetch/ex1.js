fetch("https://api.agify.io?name=michael")
    .then(res=>res.json())
    .then(myJson=>console.log(myJson))
    .catch(error=>console.log(error));