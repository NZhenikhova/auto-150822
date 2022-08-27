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