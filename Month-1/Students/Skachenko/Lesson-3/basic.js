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
