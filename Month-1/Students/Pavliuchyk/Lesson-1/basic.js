let company = 'company1';
let school = 'company2';
console.log(company < school); 

let cas = 123; 
let offer = 0.5;
console.log(offer > cas); 

const shipping = 9.95;
let delivery;
console.log(typeof shipping); //number
console.log(typeof delivery); //undefined
delivery = '9.99';
console.log(typeof delivery); //string
console.log(delivery >= shipping); 


let option1 = 0;
option1 = 0.1;
let option2 = '0.1';
console.log(option1 == option2);  // при нестрогом сравнении true
console.log(option1 === option2); // при строгом сравнении false 

let river;
let mountain = null;
console.log(mountain == river);  // при нестрогом сравнении true 
console.log(mountain === river); // при строгом сравнении false 
console.log(typeof river);       // undefined, не задан тип переменной

let sunny = true;
let rainy = false;
console.log(sunny >= rainy);
sunny = '100';
rainy = 100;
console.log(rainy != sunny);   // false, так как сами значения равны 
console.log(rainy !== sunny);  // true, так как значения не равны по типу переменной
rainy = '99';
console.log(rainy <= sunny);   // false, так как сравниваются переменные типа string

rainy = 99;
sunny = 100;
console.log(rainy <= sunny);   // true, так как сравниваются переменные типа number