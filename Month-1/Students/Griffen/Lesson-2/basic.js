/*
let time = 10
if (time < 10) {
    console.log('Первый блок');
}else if (time = 10){
    console.log('Второй блок');
}else {
    confirm.log ('Третий блок')
}
*/

// && - и
// || - или
// ! - не

/* let time = 10
if (time == !10) {
    console.log('Первый блок');
}else if (time > 10 || time < 5){
    console.log('Второй блок');
}else if (time > 5 && time < 7){
    console.log ('Третий блок')
}



// Тернарный оператор

const number = 50 < 50 ? console.log ('true') : console.log ('false');
console.log (number);

///////

const dog = 5;
const cat = '5';

if (dog === cat){
    confirm.log('Hi');
} else {
    console.log('Bye');
}

//тоже самое с тернарным

dog === cat ? console.log('Hi') : console.log('Bye');



// Операторы перключения - switch case

switch ('значение'){
case 'совпадение 1'
console.log('1');
break;
case 'совпадение 2'
console.log('2');
break;
case 'совпадение 3'
console.log('3');
}

break;
default; //если ни с чем не будет совпадения
console.log('Ничего'); 



const lang = 'fr'
switch ('lang'){
    case 'ru':
    console.log('1');
    break;
    
    case 'en':
    console.log('2');
    break;
    
    case 'fr':
    console.log('3');
    };


    // Группировка кейса

    switch ('Sandra'){
        case 'Tom': console.log('First name')
        break;
        case 'Andy': console.log ('Second name')
        break;
        case 'Other':
        case 'Admin':
        case 'User':
            console.log('Different names');
            break;
        default: console.log('Empty');
    };

    // Конкатенация строк и шаблонные строки

    let firstName = 'Bob';
    let lastName = 'Charles'
    console.log(firstName, lastName);

    let user = firstName + lastName;
    console.log(user);

    console.log('Пользователь имеет имя-' +firstName + ' ' + lastName)




    let idUser = '1112-3323-3232-3232'
    console.log(`User ID - ${idUser} с именем ${firstName}`);
 */

  
    // Home task

// Задача 1

let a = 'test'
if (a = 'test') {
    console.log ('True');
}else if (a = 'тест') {
    console.log('False');
}else {
    console.log ('False')
}

// Задача 2

const age = 25
if (age == 18) {
    console.log('Возраст совпал');
}else if (age > 18 && age < 30) {
    console.log('Категория - 1');
}else if (age > 30) {
    console.log('“Возраст пользователя” подходящий для приема на работу')
}
    
// Задача 3

let A = 4
let B = 3
if (A <= 1 || B >= 3){
    console.log (A + B);
}else {
    console.log (A - B)
}


// Задача 4

const monthOfYear = 2
if (monthOfYear >= 1 || monthOfYear <= 2 || monthOfYear == 12) {
   console.log('Winter');
}else if (monthOfYear >= 3 || monthOfYear <=5) {
   console.log('Spring');
}else if (monthOfYear >= 5 || monthOfYear <=8) {
   console.log('Summer');
}else if (monthOfYear >= 9 || monthOfYear <=11) {
   console.log ('Autumn')
};



// Задача 5

switch ('Yandex') {
    case 'Edge': console.log ('You`ve got the Edge!');
    break;
    case 'Chrome': 
    case 'Opera':
    case 'Firefox':
    case 'Safari':
        console.log ('Okay we support these browsers too');
        break;
    default: console.log ('We hope that this page looks ok!');   
};

