/*
Устанавливаем cypress:
npm install cypress
*/

/*
Устанавливаем проверочные тесты и запускаем cypress:
npx cypress open
*/

const myPets = ['Dog', 'Cat', 'Hedgehog', 'Squirrel', 'Fox'];
console.log(myPets.length, myPets[2]);

const allMachines = ['BMW', 'Mercedes', 'Audi', 'Toyota'];
console.log(allMachines.splice(2, 2, 'Ferrari', 'Lamborghini'));

let allFavoriteCars = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen'];
console.log(allFavoriteCars.unshift('Ferrari'), allFavoriteCars.push('Lamborghini'));

allFavoriteCars = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen'];
allFavoriteCars.unshift('Ferrari');
allFavoriteCars.push('Lamborghini');
console.log(allFavoriteCars);

for (let i = 0; i <= 10; i++) {
    console.log(i);
};