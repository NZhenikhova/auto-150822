// Массивы

const allCars = ['BMW', 'Mercedes', 'Volvo'];
console.log('Our array', allCars);
console.log (allCars[0]);


const myPets = ['cat', 'dog', 'horse', 'frog', 'snail']
console.log (myPets.length, myPets[2])

// Методы массивов

// push - добавление элемента в конец массива
// pop - удаление последнего элемента
// shift - удаление первого элемента
// splice - удаление конкретного элемента (или замена)
// includes - проверяет ли входит элемент в массив (true/false)
// unshift - добавляет элемент в начало массива


const allFavoriteCars = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen']
allFavoriteCars.unshift('Toyota')
allFavoriteCars.push('Kia')
console.log (allFavoriteCars);


// Циклы - for нужен для того чтобы пройти элементы один за другим, по итерации

for (let i = 0; i < 10; i++) {
    console.log(i);
}


for (let i = 0; i < allFavoriteCars.length; i++) {
    if (i ===3) {
        console.log(allFavoriteCars[i]);
        break;

    }
   console.log(i);
}

function isCarInArray (nameAuto) {
    for (let i = 0; i < allFavoriteCars.length; i++) {
        if (allFavoriteCars[i].includes(nameAuto)) {
            let auto = allFavoriteCars[i];
            return auto;
        }
    }

    return 'No car for you!';
}

const result = isCarInArray('Volvo');
console.log('I have a car - ', result);


// Обход массива циклом for (of)

const allBritishCars = ['Jaguar', 'Rolls Royce', 'Land Rover']

for (let item of allBritishCars) {
    console.log (item);
}

function searchForCar (nameAuto) {
    for (let item of allBritishCars) {
    if (item.includes(nameAuto)) {
        let auto = item;
        return auto;
    }
    }
}

const assert = searchForCar ('Land Rover');
console.log(assert);




// Home tasks

/* #1 Сформируйте массив данных. 
Перебором определите есть ли в массиве определенный элемент и запишите его в переменную.*/


const flowers = ['Rose', 'Tulip', 'Daisy', 'Lily', 'Lavender'];
function returnFlower(flowers) {
    for (let item of flowers) {
        if (item.includes (flowers)){
            let flower = item;
            return flower;

        }
    }
}
const variant = returnFlower ('Lily');
console.log(variant); // почему-то выдает undefined...




/* #2 Сформируйте два массива . Первый - определите циклом for of внутри функции есть ли у данного массива элемент, 
если нет то верните в переменную первый элемент массива.*/


const array1 = [1,2,3,4,5];
const array2 = [6,7,8,9,10]

function returnArray1 (array1) {
    for (let item of array1) {
        if (item.includes (array1)){
            let arrays = item;
            return arrays;
        }
    }
}
const results = returnArray1 (7);
console.log(results) 






/* #3 Второй -  определите циклом for внутри функции если длина массива больше 5 элементов, 
то верните текст с “читабельной ошибкой” если длина массива меньше либо равна 5. То запишите это значение в переменную 
где вызвана была функция */

if (array2.length > 5) {
    console.log ('Длина больше 5 элементов')
    else if (array2.length >= 5) {
        console.log ()
    }
}

// в процессе, не понимаю как сделать