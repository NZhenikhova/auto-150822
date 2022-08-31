/*
Устанавливаем cypress:
npm install cypress
*/

/*
Устанавливаем проверочные тесты и запускаем cypress:
npx cypress open


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

allGermanCars = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen'];
function isCarInArray (carName) {
    for (i = 0; i < allGermanCars.length; i++) {
        if (allGermanCars[i].includes(carName)) {
            let auto = allGermanCars[i];
            return auto;
        };
    };
    return "There's no such car"
};
const result = isCarInArray ('Vovo');
console.log('I have a car', result);
*/

/// Задание 1/// 
/*Сформируйте массив данных. Перебором определите есть ли в массиве определенный 
элемент и запишите его в переменную.*/ 
console.log('/// Задание 1///');
const generalArray =['a', 'b', 'c', 'd', 'e', 'f'];
function searchForElement (object) {
    for (let i = 0; i < 6; i++) {
    if (i = object) {
        let variable = i;
        return variable;
    };
    };
};
console.log(searchForElement ('z'));


/* function isJediArray (jedi) {
const allJediKnights = ['Luke Skywalker', 'Anakin Skywalker', 'Obi-Wan Kenobi', 'Qui-Gon Jinn', 'Count Dooku', 'Yoda'];
for (jedi of allJediKnights) {
    if (allJediKnights.includes(jedi)) {
        return jedi
    };    
};
isJediArray ('Grogu');

};
*/

/// Задание 2/// 
/*Сформируйте два массива . Первый - определите циклом for of внутри функции 
есть ли у данного массива элемент, если нет то верните в переменную первый
 элемент массива.*/ 
console.log('/// Задание 2///');
const allJediKnights = ['Luke Skywalker', 'Anakin Skywalker', 'Obi-Wan Kenobi', 'Qui-Gon Jinn', 'Count Dooku', 'Yoda'];
const allLightSabers = ['blue', 'green', 'purple', 'yellow', 'red', 'white'];

let assert = searchForJedi ('Grogu');
console.log('The list includes such Jedi as ', assert);
function searchForJedi (jedi) {
    for (let item of allJediKnights) {
        if (item == jedi) {
        return item;
        };
    };
    return allJediKnights[0];    
};


/// Задание 3/// 
/*Второй -  определите циклом for внутри функции если длина массива больше 
5 элементов, то верните текст с “читабельной ошибкой” если длина массива 
меньше либо равна 5. То запишите это значение в переменную где вызвана была 
функция.*/ 
console.log('/// Задание 3///');

assert = lengthOfSaberArray ();
console.log(assert);
function lengthOfSaberArray () {
    for (let i = 0; i < allLightSabers.length; i++) {
        if (allLightSabers.length > 5) {
        let l = 'Legth of this array is more then 5 items'
        return l;
        } else {
        assert = allLightSabers.length;
        return assert;
        };
    };
    return allJediKnights[0];    
};