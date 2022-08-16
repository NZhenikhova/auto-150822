/* 
Home task:

Задача 1
Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. 
Проверьте работу скрипта при a, равном 'test', 'тест'
*/

let a = 'test';
// a = 'тест';

if(a == 'test' || a === 'test'){
    console.log('Верно')
} else {
    console.log('Неверно')
};


/* 
Задача 2
Напишите условие: 
Если возраст пользователя равно 18, то выведете текст “Возраст совпал”, 
если возраст пользователя превышает ожидаемый но меньше 30, то выведете текст “Категория - 1”, 
если возраст больше 30, то выведете текст `“Возраст пользователя” подходящий для приема на работу`
*/

let age = 18;
// age = 19;
// age = 29;
// age = 30;
// age = 31;

if(age == 18 || age === 18){
    console.log('"Возраст совпал"')
} else if(age > 18 && age < 30){
    console.log('"Категория - 1"')
} else if(age >= 30){
    console.log('"Возраст пользователя” подходящий для приема на работу')};


/* 
Задача 3
Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, 
иначе выведите их разность (результат вычитания). 
Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

***  Заменила имена переменных для удобства запуска скриптов (в пред. задачках повторялись имена переменных)  a = y; b = x
*/ 

let y = 1;
// y = 0;
// y = 3;
let x = 3;
// x = 6;
// x = 5;

y <= 1 && x >= 3 ? console.log(y + x) : console.log(y - x);

/* 
Задача 4
В переменной month лежит какое-то число из интервала от 1 до 12. 
Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
*/

let month = 1;
// month = 13;

switch (true) {
    case month == 1 || month == 2 || month == 12:
    console.log ('зима');
break;
    case month >= 3 && month <= 5:
    console.log('весна');
break;
    case month >= 6 && month <= 8:
    console.log('лето');
break;
    case month >= 9 && month <= 11:
    console.log('осень');
break;
    default:
    console.log('default'); 
break;
}

/*
Задача 5
Напишите код switch, который будет соответствовать следующему if..else:
if(browser == ‘Edge’) {
    console.log(“You’ve got the Edge!“);
  } else if (browser == ‘Chrome’
   || browser == ‘Firefox’
   || browser == ‘Safari’
   || browser == ‘Opera’) {
    console.log( ‘Okay we support these browsers too’ );
  } else {
    console.log( ‘We hope that this page looks ok!’ );
  }
*/

let browser = 'Edge';
// browser = 'Firefox'
// browser = 'Mozilla Firefox'

switch (browser) {
    case 'Edge':
    console.log('“You`ve got the Edge!“');
break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
    console.log('Okay we support these browsers too');
break;
    default:
    console.log('We hope that this page looks ok!')
break;
}