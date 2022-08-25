/*----6.0 Массивы ---*/
// Структура данных

// как выглядят переменные

const automobile1 = 'BMW';
const automobile2 = 'Mercedes';
const automobile3 = 'Volvo';
const automobile4 = 'Volkswagen';

let fruit = 'apple';
console.log(fruit.length);

// как выглядит массив 

const cars = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen'];
console.log(cars);

/*
index 0 = 'BMW'
index 1 = 'Mercedes'
index 2 = 'Volvo'
index 3 = 'Volkswagen'
*/

console.log(cars[0]);
console.log(fruit[0]);

console.log(cars.length);
console.log(fruit.length);

const allVehicle = ['BMW', 10, true, 'Volkswagen', null];
console.log(allVehicle);

let pets = [];
console.log(pets.length);

let cats = new Array();
console.log(cats.length);

const houses = [['apart1', 'apart2'], ['appart1']];

const allAuto = [['BMW', 'Mercedes', 'Volvo', 'Volkswagen', 'Toyota'], [1,2,3], ["string", true, 12]];
console.log(allAuto[2][0]);


/*----6.1 Методы массивов ---*/
// const allMachines = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen'];
// console.log(allMachines);

// allMachines.push('Toyota', 'Magic car');

// fruit.substring[0,1];

// console.log(fruit.substring(1,2));

// allMachines.splice(2,2);



//.splice([start]), ([deleteCount, newElements])

const allMachines = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen'];
console.log(allMachines);

allMachines.splice(1, 2);
console.log(allMachines);

allMachines.splice(1, 0, 'Magic Car', 'Funny Car');
console.log(allMachines);

const petsK = ['cat', 'dog', 'bat'];
const checkPet = petsK.includes('cat');

console.log(checkPet);


console.log(fruit.includes('p'));


const allFavoriteCars = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen'];

allFavoriteCars.unshift('Super Car');
allFavoriteCars.push('Magic motor');

console.log(allFavoriteCars);

/////

for(let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 0; i < 10; i = i + 2) {
    console.log(i);
}



/*----7.1 Обход массива циклом for ---*/

const allGermanCars = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen', 'Toyota'];
/* 
console.log(allGermanCars);
console.log(allGermanCars[0]);
console.log(allGermanCars[1]);
console.log(allGermanCars[2]);
console.log(allGermanCars[3]); 
console.log(allGermanCars[4]); 
*/

for (let i = 0; i < allGermanCars.length; i++) {
    console.log(allGermanCars[i]);
};


function isCarInArray(nameAuto){
    for (let i = 0; i < allGermanCars.length; i++) {
    if(allGermanCars[i].includes(nameAuto)){
        let auto = allGermanCars[i];
        return auto;
    }  else {
       return 'Car was not found in the array';
    } 
}
};

console.log(isCarInArray('Fancy Car'));

/*----7.2 Обход массива циклом for (of) ---*/

const allBritishCars = ['Jaguar', 'ROLLS-ROYCE', 'ASTON MARTIN', 'Bentley', 'Land Rover']; 

for(let item of allBritishCars) {
    console.log(item);
}


function searchForCar(nameAuto){
    for (let item of allItalianCars) {
    if(item.includes(nameAuto)){
        let auto = item;
        return auto;     
    }   
}
};

const assert = searchForCar('Pagani');
console.log(assert);