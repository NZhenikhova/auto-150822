// Функции

// function declaration

nameFunction();

function nameFunction () {
    console.log ('Функция вызвалась - function declaration')
}
nameFunction();


let fruit = 'apple';
let count = 23;

function showCountApples() {
    console.log (`I have ${count} my ${fruit}`);
}
showCountApples();


let myName = 'Marina'
function myNameIs() {
    console.log (`My name is ${myName}`);
}
myNameIs();

// function expression 

const functions = function() {
    console.log ('function expression');
}

functions();

// Параметры и аргументы для функции

function findElement (parametrName){
    console.log(`На странице ${parametrName} элементне обнаружен`)
};

let page = 'Home';
findElement(page);


let number = 10
function test (number){
number >= 18 ? console.log ('true') : console.log ('false');    
};
test(number); 

// arrow function

let func2 = (num1, num2) => {
let result = num1 * num2;
    console.log('Arrow function', result)
}

func2(3,4); //аргументы

// Return

function Test (parName1, parName2, paramName3) {
    const res = parName1 + parName2 + paramName3;
    return res;
};

let num1 = 10;
let num2 = 20;
let num3 = 200;

const result = Test(num1,num2,num3);
console.log(result);

// Функции как аргумент

function summ (a, b){
    return a+b;
}
// 1) variant
let results = summ(10, 12);
console.log('Summ numbers', results)

// 2)varinat (as argument)
console.log(summ(10,12));

// 3) variant (as result)
const fullResult = summ(summ(1,3), summ(5,6));
console.log('Full result', fullResult);


function isStrongPassword (password) {
    const length = password.length;
    return length > 8 && length < 20;

}
const one = isStrongPassword('password');
const two = isStrongPassword('123442324234')

console.log ('Check word password is strong', one); //false
console.log ('Check word password is strong', two) //true









// Home tasks

/* #1 Напишем стрелочную функцию, проверяющую квартиру.
Она принимает два аргумента: площадь (число) и название улицы (строку):
площадь должна быть больше либо равна 100 кв.м ИЛИ больше либо равна 80 кв.м И
улица должна быть равна "School-street" */

const apartment = (square, streetName) => {
let result = square >= 100 || square >= 80 && streetName == 'School-street'
    console.log(result)
}
apartment(85, 'School-street'); //true

/*
Comments Task1
1. Можно также было вернуть через return 
2. Также можно square >= 100 || square >= 80  записать одинм кейсом  square >= 80 
 будет покрывать и  square >= 100
*/

/* #2 Реализуйте функцию, который проверяет формат указанного телефона.
Если телефон начинается с +, значит это международный формат.*/

let phoneNum = '+38066012345';
let phoneNum2 = '066012345';
function checkPhoneNum (phoneNum){
    console.log (`${phoneNum} имеет международный формат`)
}
checkPhoneNum(phoneNum);
/* Comments Task2
1. Не вижу проверку на номер, можно было сделать вот так:
phoneNum[0] -  возвращает значение первого индекса
phoneNum.includes('+', 0) - первым аргументов идет занчение которое мы ищем,
а второй индекс на какой позиции мы ожидаем наше значение
*/

/* #3 Напишите стрелочную функцию которая проверит 
тип данных аргумента на ‘string’ и выведет в консоль true. */

const stringCheck = (argument) => {
let type = typeof argument 
argument = type ? console.log (true) : console.log (false);  
}
stringCheck('test');
/* Comments Task3
1. Можно не обрачивать ключевое слово в кавычки 'true' => true
2. Так же можно вернуть значение с функции return type ? console.log (true) : console.log (false);    
*/
