/*
Leсtion 4
*/
//Массив//
// const automobile = 'BMW';
// const automobile1 = 'Mercedes';
// const automobile2 = 'Volvo';
// const automobile3 = 'Volswagen';

// let cats = [];
// console.log('Length of array', cats.length);

// const allCars = ['BMW', 'Mercedes', 'Volvo', 'Volswagen'];
// console.log('Our array', allCars);

// const allVehicle = ['BMW', 10, true, 'Volswagen', null];
// console.log(allVehicle);

// const allAuto = [['BMW', 'Mercedes', 'Volvo', 'Volswagen'], [1,2,3], ['string', true,12]];
// console.log('All auto result', allAuto[0][1]);
//Task one for this class
// const myPet = ['cat', 'dog', 'chicken', 'cow', 'parrot'];
// console.log('Arrow length'+'',myPet.length,myPet[3]);

// const allMachines = ['BMW', 'Mercedes', 'Volvo', 'Volswagen'];
//console.log(allMachines.push('Toyota'));//added element to the end of the array
//console.log(allMachines.pop());//deletes last element

// console.log('Check splice', allMachines.splice(0,1));

// const petsName = ['Marfa', 'Kyzya', 'Iko'];
// console.log(petsName.includes('Lady'));//checks whether it includes

// petsName.unshift('Kesha');
// console.log(petsName);
//Task 2 for classwork
// let allFavoriteCars = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen'];
// allFavoriteCars.push('Saab');
// allFavoriteCars.unshift('Toyota');
// console.log(allFavoriteCars);

//Cycles
// for (let i=0; i<=10; i++) {
//     console.log(i);
// }

// let allGermanCars = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen', 'Toyota'];

// for(let i=0; i<5; i++) {
//     console.log(allGermanCars[i]);
// }
// for(let i=0; i<allGermanCars.length; i++) {
//     console.log(allGermanCars[i]);
// }

// for(let i = 0; i < allGermanCars.length; i++) {
//     if(allGermanCars[i] === 'Volswagen') {
//     console.log('I am here', allGermanCars[i]);
//     }
// };

// for(let i = 0; i < allGermanCars.length; i++) {
//     if(i===3) {
//     console.log('I am here', allGermanCars[i]);
//     break;
//     }
//     console.log(i);
// };

// //Test task 3
// for (let i=0; i<=10; i++) {
//     console.log(i);
// }

// let allGermanCars = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen', 'Toyota'];

// function isCarInArray(nameAuto) {
//     for(let i = 0; i < allGermanCars.length; i++){
//         if(allGermanCars[i].includes(nameAuto)) {
//             let auto = allGermanCars[i];
//             return auto;
//         }
//     }
//     return 'There is no auto';
// }
// const result = isCarInArray('Volkswagen');
// console.log('I have a car', result);

// const allBritishCars = ['Jaguar', 'Aston Martin', 'Bentley','Land Rover'];
// for (let i = 0; i < allBritishCars.length; i++){
//     console.log(allBritishCars[i]);
// }
//     for(let item of allBritishCars){
//         console.log(item);
//     }

// const allItalianCars = ['Pagani', 'Mazzerati', 'Ferrari', 'Lamborghini', 'Mazzanti'];
// function searchForCar(nameAuto){
//     for(let item of allItalianCars){
//         if(item.includes(nameAuto)){
//             let auto = item;
//             return auto;
//         }
//     }
// }
// const assert = searchForCar('Pagani');
// console.log(assert);


/* Hometask for lesson 4
 */
//Task 1
let fruits = ['Apple', 'Banana', 'Pear', 'Watermelon'];
function fruitInArray(fruitName) {
    for(let item of fruits){
        if(item.includes(fruitName)){
         let fruit = item;
         return fruit;
        }
    }
}
const search = fruitInArray('Pear');
console.log(search);

/* Comments Task 1
1) А что будет если фрукта не будет в массиве? Нужно обрабатыват и такой случай
 */

//Task2
let weather = ['rainy', 'windy', 'sunny', 'snowy'];
function weatherInArray(weathertitle){
    for(let key of weather){
        if(key.includes(weathertitle)){
            let weathertitle = key;
            return key;
        }
    }
}
console.log(weather.includes('stormy'));
const locate = weather.unshift('stormy');
console.log(weather);

/* Comments Task 2
1) А что будет если погоды не будет в массиве? Нужно обрабатыват и такой случай
 */

/* Task 3
Второй -  определите циклом for внутри функции если длина массива больше 5 элементов, 
то верните текст с “читабельной ошибкой” если длина массива меньше либо равна 5
То запишите это значение в переменную где вызвана была функция. 
*/

let mood = ['happy', 'depressed', 'in love', 'cozy'];
function moodCheck(moodname){
    for(let i = 0; i < mood.length; i++){
        if(i > 5){
            return 'Too many items';
        }
    }
    return 'This one is okay'
}
const result = moodCheck(mood.length);
console.log('Here is the result', result);

/* Comments Task 3
Напишу вам решение по шагово для всех
*/




