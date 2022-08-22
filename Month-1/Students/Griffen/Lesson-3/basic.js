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
}
test(); 