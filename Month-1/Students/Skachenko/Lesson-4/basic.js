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

const allFavoriteCars = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen'];
console.log(allFavoriteCars.unshift('Ferrari'), allFavoriteCars.push('Ferrari'));
