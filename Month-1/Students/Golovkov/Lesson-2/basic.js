//Занятие

let name = 65
let name1 = 70
let name2 = true
let num = 4

if(name1 > name && name1>100){console.log('готово')}
else(console.log('не готово'))
if(name1 > name || name1>30){console.log('готово')}
else(console.log('не готово'))
if(name2 != !true){console.log('лож')}
else(console.log('правда'))

name1===name ? console.log(name1): console.log(name);

switch(num){
case 1:
console.log('зима')
break;
case 2:
console.log('весна')
break;  
case 3:
 console.log('лето')
break; 
case 4:
console.log('осень')
break;
}


//Домашка

//1.
let a = 'test'
if (a == 'test') {console.log('Верно')}
else{console.log('Неверно')}

//2.
let age =31
if(age === 18){console.log('Возраст совпал')}
else if(age>18 && age <30){console.log('Категория - 1')}
else if(age>30){console.log('Возраст пользователя подходящий для приема на работу')}

//3.
a =1
let b =3
a<=1 && b>=3 ? console.log(a+b): console.log(a-b);

a = 0
b = 6
a<=1 && b>=3 ? console.log(a+b): console.log(a-b);

a = 3
b = 5
a<=1 && b>=3 ? console.log(a+b): console.log(a-b);

//4.
let month = 8
if (month==12 || month<3 && month>0){console.log('Зима')}
else if (month>=3 && month<=5){console.log('Весна')}
else if (month>=6 && month<=8){console.log('Лето')}
else if (month>=9 && month<=11){console.log('Осень')}
else{console.log('Неправильный формат данных')}


//5.
browser = 'Opera'
switch(browser){
    case 'Edge':console.log("You've got the Edge")
    break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':console.log('Okay we support these browsers too')
    break;
    default:console.log('We hope that this page looks ok!')
    }