/// Function declaration 
/*

function nameFunction(){
    console.log("Декоративная Функция");
}

nameFunction();

let fruit = 'apple';
let count = 23;

function showCountApples(){
    console.log(`I have ${count} my  % {fruit}`);
}
showCountApple();




let name = "Danill";
let lastName = "Verulane";
function NameLastName(){
    console.log (`I am ${name} ${lastName}`)
;}
NameLastName();




/// function expression



const functions = function (){
    console.log("function expression")
};

functions ();





function findElement (paramentName){
    console.log(`На странице ${paramentName}`)
};

let page = "Home";

findElement(page);


let numb = 11;
function numbs(age){
age > 18 ? console.log("true") : console.log("false")  
};
numbs(numb);





// arrow functional


let func =(numb1,numb2) => {
let result= numb1 * numb2;   
    console.log(result);
};
func(2,5);



// Return




function test (para1,para2,para3){
    
    const res = para1 + para2 + para3;
    return res;
};

let number1 =10;
let number2 =34;
let number3 =200;


const result = test(number1,number2,number3);
    console.log(result);





function summ(a,b){
    return a + b;
}
let result = summ(10,12);    //22
console.log(result);




console.log(sum(10,12));


function summ(a,b){
    return a + b;
}


const fullResult = summ(summ(1,3), summ(5,6));
console.log(fullResult);




let func = (numb1,numb2) => {
    let result = numb1+numb2;
    return result;
};

let numb1 = 1;
let numb2 =2;

console.log(func(numb1,numb2));


function  isStrongPassword(password){
    const length = password.length;
    return length > 8 && length <20;
}

const one =isStrongPassword('password');
const two =isStrongPassword('crazylastochka');

console.log(`Check word password is strong `, one );
console.log(`Check word password is strong `, two );

*/

/////////////////////////////////////// Home Task 

// Task 1
// Напишем стрелочную функцию, проверяющую квартиру. 
// Она принимает два аргумента: площадь (число) и название улицы (строку):
// площадь должна быть больше либо равна 100 кв.м ИЛИ больше либо равна 80 кв.м И 
// улица должна быть равна “School-street”

let func = (numb, string) => {
    result = numb >=100 && string == "School-street" ;
    return (result)
};

numb = 100;
string = "School-street";

console.log('Check the apart', func(numb,string));

/* Comments Task 1
0. Имя функции должно указывать, что мы делаем или проверяем в этой функции?
1. Мы не называем переменными ключевыми словами string => переменную можно было назвать streetName
2. как мы сравниваем переменные типа string => string =="School-street"?  
To compare strings based on their values and characters case, 
use the “Strict Equality Operator (===)”.
3. Почему результат в скобках? (result)
*/

// Task 2
// Реализуйте функцию, который проверяет формат указанного телефона. 
// Если телефон начинается с +, значит это международный формат.

function numberPhone(number1){
    result = number1;
    number1[0] == "+"? console.log("Международный номер") : console.log("Немеждународный номер");   
};

let number1 = "+380970951282";  // input

numberPhone(number1);

/* Comments Task 2
1. Зачем нужна строка  result = number1;?
2. Параметр можно назвать чуть лучше phoneNumber
*/

// Task 3
// Напишите стрелочную функцию которая проверит тип данных аргумента на ‘string’ 
// и выведет в консоль true.

let words = (example) => { 
    return string;
};

example = ("Test");         // input 
console.log(typeof example);
words();

/* Comments Task 3
1. Проверка должна быть внутри функции, 
это значит что нужно написать условие кторое проверяет дейтвильно ли тип будет string

let page = 'string';
let func = (parametrName) =>{
   const type = typeof parametrName;
   if(type === 'string'){
    console.log(true)
   
};
}
func(page);

*/


