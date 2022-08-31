/*const automobile1 = 'BMW';
const automobile2 = 'Mercedes';
const automobile3 = 'Volvo';
const automobile4 = 'Volkswagen';

let cats = [];
console.log('Длина масива', cats.length)

const allCars = ['BMW', 'Mercedes', 'Volvo']
console.log('Our array', allCars)  */

//console.log(allCars[0])

//const allVehicle = ['BMW', 10, true, null]

let myPets = ['cat', 'dog', 'dog1', 'dog2']
console.log(myPets.length, myPets[2])

let allFavoriteCars = ['BMW', 'Mercedes', 'Volvo', 'Volkswagen'] 
allFavoriteCars.push('VAZ')
allFavoriteCars.unshift('UAZ')
console.log(allFavoriteCars)


// ЦИКЛЫ
/*
for (let i=8;i<10; i++ ) {
    console.log(i)
}

for (let i=8;i<=10; i++ ) {
    console.log(i)
}

for (let i=8;i<10; i + 2 ) {
    console.log(i)
}
*/
// Сформируйте цикл, который выведет значения от 0 до 10 включительно 
//for (let i=0;i<=10; i ++ ) {
   // console.log(i)
//}

//задачка в фото


//Домашка
//task1
//Сформируйте массив данных. Перебором определите есть ли в массиве определенный элемент и запишите его в переменную.

let choiceDrink = 'vodka';
let alcohol = ['vermouth', 'vodka', 'jin', 'whisky'];
if (alcohol[0] === choiceDrink) {
    console.log (choiceDrink,'любимый алкоголь')
} else if (alcohol[1] === choiceDrink) {
    console.log (choiceDrink,'любимый алкоголь')
} else if (alcohol[2] === choiceDrink) {
    console.log (choiceDrink,'любимый алкоголь')
} else if (alcohol[3] === choiceDrink) {
    console.log (choiceDrink,'любимый алкоголь')
}else {
    console.log('Неправильный выбор');
};
///////////////////
choiceDrink = 'whisky';
alcohol = ['vermouth', 'vodka', 'jin', 'whisky'];
let result= alcohol.includes(choiceDrink);
console.log(result);

///////////////////

/*choiceDrink = 'whisky';
alcohol = ['vermouth', 'vodka', 'jin', 'whisky'];
for (let i=0;i<alcohol.length; i++) {
    let b =alcohol[i];
    console.log(alcohol[i])
} */


choiceDrink = 'vodka';
for (let i=0;i<alcohol.length; i++) {
    if (alcohol[i] === choiceDrink) {
        console.log('Алкоголь', choiceDrink, 'есть в списке любимых')
    }
}

/*task2
Сформируйте два массива . Первый - определите циклом for of внутри функции есть ли у данного 
массива элемент, если нет то верните в переменную первый элемент массива.*/

const manName = ['Robert', 'Eric', 'John', 'James'];
const womanName = ['Jenny', 'Abby', 'Batty', 'Gloria', 'Babby'];


const searchManName  = (name) => {
    for (let item of manName){
        if (item.includes(name)){
            let favoriteName = item;
            return favoriteName}}
            favoriteName = manName[0];
            return favoriteName   
}

let man = searchManName ('Batty')
console.log(man)
// Отлично!

/*task3
Второй -  определите циклом for внутри функции если длина массива больше 5 элементов, то верните текст 
с “читабельной ошибкой” если длина массива меньше либо равна 5. 
То запишите это значение в переменную где вызвана была функция.*/

let amount
const searchWomanName =(number) => {
    for (let i = 0; i<(womanName.length+1); i++) {
        amount =i
        }
        if (amount<=number) {
            return amount}
            else if (amount>number) {console.log('Длина массива больше', number)}
}

let resultSearch = searchWomanName(4)
//console.log(resultSearch) 
// Идея на верном путо но переменные это же совсем путает