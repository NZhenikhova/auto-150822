let cats = [];
console.log('Длина массива', cats.length);

const automobile1 = 'BMW';
const automobile2 = 'Mercedes';
const automobile3 = 'Volvo';
const automobile4 = 'Volkswagen';

const allCars = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen'];
console.log('Our array', allCars);

console.log(allCars[0]);

const allMachines = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen', 'kia'];
// console.log('Added new car ', allMachines.push('Toyota'));
// console.log(allMachines);
// console.log('Deleted ' , allMachines.pop());
// console.log('Delete the first element' , allMachines.shift());
console.log('Check splice ', allMachines.splice(2, 2, 'newcar', 'newcar2'));

let myPets = ['cat', 'dog', 'mouse', 'chameleon', 'snake'];
// console.log ('Длина массива ', myPets.length);
// console.log ('Третий элемент ', myPets[2]);
console.log(myPets.includes('snake'));
// push pop shift unshift splice include 
myPets.unshift('parrot');
console.log(myPets);

// const allFavoriteCars = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen']
// allFavoriteCars.unshift('Toyota');
// console.log('Массив с новым элементом в начале ', allFavoriteCars);
// allFavoriteCars.push('Kia');
// console.log('Массив с новым элементом в конце ', allFavoriteCars);

// циклы (от, до, шаг)
for (let i = 0; i < 10; i++){
    console.log(i);
}

const allCar = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen']
for (let car = 0; car < 5; car ++){
    console.log(allCar[car]);
}

for (let a = 0; a <= 10; a++){
    console.log(a);
}