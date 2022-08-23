/*
Устанавливаем cypress:
npm install cypress
*/

/*
Устанавливаем проверочные тесты и запускаем cypress:
npx cypress open
*/

let name = 'Max';
function myName () {
    console.log (`Hello, my name is ${name}.`);
};
myName();

/*const monthly = year() {
    console.log('Smth');
};
monthly();
*/


let month = (parametrNum) => {
    parametrNum > 18 ? console.log('true') : console.log('false');    
};
month(11);




function summ (a, b) {
    return a + b 
};
let result = summ (3, 6);
console.log(result);


function isStrongPassword (password) {
    const length = password. length;

    return length > 8 && length < 20;
};

const ini = isStrongPassword ('luhvbafvbljvsgnsdhnsdynsrnbhadfb');

console.log('Check word password is strong ', ini);


/// Задание 1/// 
/*Напишем стрелочную функцию, проверяющую квартиру.
Она принимает два аргумента: площадь (число) и название улицы (строку):
площадь должна быть больше либо равна 100 кв.м ИЛИ больше либо равна 80 кв.м И
улица должна быть равна “School-street”*/ 
console.log('/// Задание 1///');

const flat = (square, street) => {
    square = square >= 80 ? 'true' : 'false';
    street = street == 'School-street' ? 'true' : 'false';
return square, street
};
console.log(flat(101,'School-street'));

/// Задание 2/// 
/*Реализуйте функцию, который проверяет формат указанного телефона.
Если телефон начинается с +, значит это международный формат.*/ 
console.log('/// Задание 2///');

function phoneNumber (a) {
    firstSymbol = a[0] == '+' ? 'Международный формат' : 'Не международный формат'
    return firstSymbol;
};
console.log(phoneNumber('+380991234567'));

/// Задание 3/// 
/*Напишите стрелочную функцию которая проверит тип данных аргумента на ‘string’ 
и выведет в консоль true.*/ 
console.log('/// Задание 3///');

const typeCheck = (b) => {
    result = typeof(b) == 'string' ? 'true' : 'false'
    return result;
};
console.log(typeCheck('+380991234567'));