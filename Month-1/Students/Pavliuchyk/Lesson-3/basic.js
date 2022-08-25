// function declaration

nameFunction();
function nameFunction() {
    console.log ('Функция вызвалась');
    }

let name1 = 'Olga';
let surname = 'Pavliuchyk';

function showNameSurname() {
    console.log (`My name is ${name1} ${surname}`);
}
showNameSurname();


// function expression

const functions = function(){
    console.log(`function expression`);
}
functions();

//параметры и аргументы функций

function findElement (parametrName){
    console.log(`На странице ${parametrName} элемент не обнаружен`);
}

let page = 'Home';
findElement(page);

function findElement2 (parametrName, parametrName2, parametrName3){
    console.log(`На странице ${parametrName} элемент ${parametrName2} класса ${parametrName3} не обнаружен`);
};

let page2 = 'Home';
findElement2(page2, 'registration page', 'work');


function checking (age){
    age > 18 ? console.log('true') : console.log ('false');
    }
    let age = 19;
    checking(age);


    //arrow function 

    let funcArr = (num1, num2) => {
        let result = num1 * num2;
        console.log('Arrow function', result)
    }
    funcArr (3,4);

      //expression function 

      let funcExpr = function(num1, num2) {
        let result = num1 * num2;
        console.log('expression function', result)
    }
    let perem1 = 2;
    funcExpr (perem1,5);

    //функция может возвращать - return

    function finds2 (parametrName, parametrName2, parametrName3){
        const res = parametrName + parametrName2 + parametrName3;
        return res;
    };

    let numb1 = 1;
    let numb2 = 5;
    let numb3 = 10;

    const result1 = finds2(numb1, numb2, numb3);
    console.log(result1); 

    //функции как аргумент 

    function summ (a, b){
        return a + b;
    }
    let result = summ(10, 12);
    console.log('Summ numbers ', result);

    // пример2 function as argument

    console.log(summ(20,5));

    // пример3 function as result

    const fullResult = summ(summ(1, 3), summ (5, 6));
    console.log('full result ', fullResult);

    // задание 

    function fSumm (param1, param2){
        const resOfFunc = param1 + param2;
        return resOfFunc;
    };

    let param1 = 10;
    let param2 = 5;
    console.log(fSumm(param1, param2));


    // 

    function isStrongPassword(password){
const length = password.length;
return length > 8 && length < 20;
    }
    const one = isStrongPassword('password');
    const two = isStrongPassword('crazycrazy');
    const three = isStrongPassword('12312312312312312313213123');
    console.log('Check word password is strong ', one);
    console.log('Check word password is strong ', two);
    console.log('Check word password is strong ', three);


//HOMEWORK

// Task 1
//Напишем стрелочную функцию, проверяющую квартиру. 
//Она принимает два аргумента: площадь (число) и название улицы (строку):
//площадь должна быть больше либо равна 100 кв.м ИЛИ больше либо равна 80 кв.м И улица должна быть равна “School-street”

// условие понято мной так - для результата true надо: 
// 1) площадь >=100 
// ИЛИ 
// 2) площадь >=80 И название улицы School-street

// иначе можно было бы обойтись только вторым условием 

let funcApart = (square, streetName) => {
    square >= 100 || (square >= 80 && streetName == 'School-street') ? console.log('Соответствует критериям') : console.log('Не соответствует критериям');
  }

funcApart (100, 'anystreet');  // соответствует (так как площадь соответствует, название улицы не важно)
funcApart (80, 'School-street');  // соответствует (так как по второй части условия и площадь, и название улицы true) 
funcApart (50, 'School-street');  // не соответствует (площадь false, название улицы, хоть и true само по себе, не важно так как логический оператор &&)
/* Comments Task 1
1. Отлично, тут можно крутить задачу по разному.
*/

// Task 2
// Реализуйте функцию, который проверяет формат указанного телефона.
// Если телефон начинается с +, значит это международный формат.

let funcPhoneCheck = function(phoneNumber) {
    phoneNumber[0] == '+' ? console.log('Номер тел. в международном формате') : console.log('Номер тел. в обычном формате');
    }

funcPhoneCheck ('+380960000000'); 
funcPhoneCheck ('380960000000'); 
/* Comments Task 2
Молодец!
*/

// Task 3
// Напишите стрелочную функцию которая проверит тип данных аргумента на ‘string’
// и выведет в консоль true.

let dataTypeCheck = (parametrName1) => {
    typeof parametrName1 == 'string' ? console.log('true') : console.log('false');
}

dataTypeCheck ('56'); // true потому что string
dataTypeCheck ('abracadabra'); // true потому что string
dataTypeCheck (56); // false потому что number
const numm = 0.5;
dataTypeCheck (numm); // false потому что number
let boolVar = true;
dataTypeCheck (boolVar); // false потому что boolean 

/* Comments Task 3
Молодец!
*/


