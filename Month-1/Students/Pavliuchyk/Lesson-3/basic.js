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


function proverka (number1){
    number1 > 18 ? console.log('true') : console.log ('false');
    }
    let number1 = 19;
    proverka(number1);