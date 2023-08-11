const cars = ['Saab', 'Volvo', 'BMW'];

cars.splice (0, 1, "Ford")
console.log (cars)

// otra forma
cars[0]="Ford";
console.log(cars[0]);