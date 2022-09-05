// Task 1
// Напишем стрелочную функцию, проверяющую квартиру.
// Она принимает два аргумента: площадь (число) и название улицы (строку):
// площадь должна быть больше либо равна 100 кв.м ИЛИ больше либо равна 80 кв.м И
// улица должна быть равна “School-street”

// version 1
let checkApartment = (area, street) => {
    area >= 80 && street === 'School-street' ? (console.log('Квартира соответствует условиям')) : (console.log('Квартира НЕ соответствует условиям'))
}; 

checkApartment(80, 'School-street');
checkApartment(79, 'School-street');
checkApartment(80, 'School-Ave');

// version 2
let checkApartment2 = (area2, street2) => {
    return area2 >= 80 && street2 === 'School-street'
}; 

let result = checkApartment2(80, 'School-street');
console.log(result);



// Task 2
// Реализуйте функцию, который проверяет формат указанного телефона.
// Если телефон начинается с +, значит это международный формат.

// version 1
const checkPhone = (phoneNumber) => {
    phoneNumber.indexOf('+') === 0 ? (console.log('Міжнародний формат номеру телефону')) : (console.log('Не міжнародний формат номеру телефону'));
};

checkPhone('+380950612102');
checkPhone('380950612102');
checkPhone('3+80950612102');

// version 2
const checkPhone2 = (phoneNumber2) => {
    phoneNumber2[0].includes('+') === true ? (console.log('Міжнародний формат номеру телефону')) : (console.log('Не міжнародний формат номеру телефону'));
};

checkPhone2('+380950612102');
checkPhone2('380950612102');
checkPhone2('3+80950612102');



// Task 3
// Напишите стрелочную функцию которая проверит тип данных аргумента на ‘string’ и 
// выведет в консоль true.

let checkFormat = (argument) => {
typeof argument === 'string' ? (console.log(true)) : (console.log(false))
};

checkFormat('123');
checkFormat(123);















///////// Конспект 

// declaration
function authorization(){
    console.log('hi');
}
// expression
const signIn = function(parameter){
    console.log('qwe');
}
// arrow function
const arrow = (parameter) => {
    console.log('qwe');
}