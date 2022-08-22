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