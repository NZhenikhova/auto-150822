/*
Устанавливаем cypress:
npm install cypress
*/

/*
Устанавливаем проверочные тесты и запускаем cypress:
npx cypress open
*/

/*
>, <, >=, <= - больше, меньше, больше или равно, меньше или равно

== - Нестрогое сравнение
=== - Строгое сравнение
!= - Нестрогое неравенство
!== - строгое неравенство
string/string, >
number/number, <
string/string, >=
number/number, <=
string/number, ==
string/string, ===
number/number, !=
string/number, !==
*/

let a = 'firstName';
let b = 'secondName';
console.log(a>b);
a = 1234
b = 4321
console.log(a<b);
a = '1234'
b = 4321
console.log(a>=b);
a = 1234
b = 4321
console.log(a<=b);
a = '1234'
b = 4321
console.log(a==b);
a = 'firstName'
b = 'secondName'
console.log(a===b);
a = 1234
b = 4321
console.log(a!=b);
a = '1234'
b = 4321
console.log(a!==b);